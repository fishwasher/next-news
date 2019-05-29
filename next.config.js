const withLess = require('@zeit/next-less')

const isLocalProd = process.env.NEXT_ENV === 'local'

module.exports = isLocalProd ? withLess() : withLess({
  target: 'serverless'
})

