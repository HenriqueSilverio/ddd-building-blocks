#
# Stage 1: build
#
FROM node:18.13.0-alpine@sha256:b3f383c13d71066a4e2380d42f4563ac14ac76b3035a5bea4db84209e14665d5 AS build

USER node

ARG CI=true

WORKDIR /home/node

COPY --chown=node:node ["package.json", "package-lock.json", "./"]

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

#
# Stage 2: clean
#
FROM node:18.13.0-alpine@sha256:b3f383c13d71066a4e2380d42f4563ac14ac76b3035a5bea4db84209e14665d5 AS clean

USER node

ARG CI=true

WORKDIR /home/node

COPY --chown=node:node ["package.json", "package-lock.json", "./"]

RUN npm ci --omit=dev

#
# Stage 3: production
#
FROM node:18.13.0-alpine@sha256:b3f383c13d71066a4e2380d42f4563ac14ac76b3035a5bea4db84209e14665d5

ARG USERNAME=nonroot
ARG USERHOME=/home/${USERNAME}

ENV NODE_ENV=production
ENV SERVICE_NAME="DDD Building Blocks"

RUN deluser --remove-home node && \
  addgroup \
    --gid 1000 \
    ${USERNAME} \
  && \
  adduser \
    --disabled-password \
    --home ${USERHOME} \
    --ingroup ${USERNAME} \
    --uid 1000 \
    ${USERNAME}

RUN apk update && apk add --no-cache tini

COPY --from=build --chown=${USERNAME}:${USERNAME} /home/node/dist ${USERHOME}/src

COPY --from=clean --chown=${USERNAME}:${USERNAME} /home/node/node_modules ${USERHOME}/node_modules

WORKDIR ${USERHOME}

USER ${USERNAME}

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "src/index"]
