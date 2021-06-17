const path = require('path'),
  express = require('express'),
  app = express(),
  log4js = require('./configs/log.config.js'),
  logger = log4js.getLogger('server')

// configure local environment
require('dotenv').config()

// serve static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// configure app to use bodyParser()
// this will let us get the data from a POST body
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

// return index.html as default static page
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))

// define port for application to listen on
const port = process.env.PORT || 3000

logger.info('Destiny application starting on port: ' + port)

// start the application server
app.listen(port,
  () => console.log(`Destiny started at http://localhost:${port}`))