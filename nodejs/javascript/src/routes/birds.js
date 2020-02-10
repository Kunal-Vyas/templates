var express = require('express')
var router = express.Router()

const birds = [
    {
        "id": 1,
        "name": "woodpecker",
        "call": "tuk tuk"
    },
    {
        "id": 2,
        "name": "humming bird",
        "call": "chee-dit"
    }
]

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define get all birds route
router.get('/', (req, res) => res.send(birds))

// define get specific bird route
router.get('/:id', (req, res) => {
    if(req.params.id !== '1' && req.params.id !== '2') {
        res.send('404 - bird not found!')
    } else {
        res.send(birds[parseInt(req.params.id) - 1])
    }
})

// define create bird route
router.post('/', (req, res) => {
    res.json(
        {
            "id": 3,
            "name": "blue jay",
            "call": "jeer"
        }
    )
})

module.exports = router