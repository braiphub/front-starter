import { createIPX, createIPXMiddleware } from 'ipx'

// https://github.com/unjs/ipx
const ipx = createIPX({
  dir: 'static/', // absolute path to images dir
  domains: ['media.braip.com'], // allowed external domains (should match domains option in nuxt.config)
  alias: {
    braip: 'https://media.braip.com/',
  },
  sharp: {}, // sharp options
})

export default createIPXMiddleware(ipx)
