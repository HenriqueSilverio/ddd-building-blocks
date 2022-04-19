import env from 'require-env'

const config = {
  serviceName: env.require('SERVICE_NAME'),
}

export default config
