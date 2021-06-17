const log4js = require('log4js')

log4js.configure({
  appenders: {
    console: {
      type: 'stdout'
    },
    destiny: {
      type: 'file',
      filename:
      'logs/destiny.log'
    }
  },
  categories: {
    default: {
      appenders: ['console', 'destiny'],
      level: 'trace'
    }
  }
})

module.exports = log4js