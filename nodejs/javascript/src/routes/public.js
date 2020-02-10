var express = require('express')
var router = express.Router()

// define the about route
router.get('/about', (req, res) => res.send('About birds'))

// define the catch all error route
router.get('/*', (req, res) => res.send('404!'))

module.exports = router