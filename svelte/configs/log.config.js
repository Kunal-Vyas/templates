const log4js = require('log4js')

log4js.configure({
  appenders: {
    console: {
      type: 'stdout'
    },
    template: {
      type: 'file',
      filename:
      'logs/template.log'
    }
  },
  categories: {
    default: {
      appenders: ['console', 'template'],
      level: 'trace'
    }
  }
})

module.exports = log4js