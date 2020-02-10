const express = require('express')
const app = express()
const path = require('path')

const birds = require('./routes/birds')
const public = require('./routes/public')

const port = 3000

// serve static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// define the index page route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// handle birds routes
app.use('/birds', birds)

// handle catch all routes
app.use('/*', public)

// start nodejs server process
app.listen(port, () => console.log(`Example app listening on port ${port}!`))