import config from './config'

process.stdout.write(`Starting ${config.serviceName}...`)

setTimeout(() => {
  process.stdout.write('Bye!')
}, 5 * 60 * 1000)
