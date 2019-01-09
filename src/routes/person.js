let express = require('express')
let router = express.Router()
let utils = require('util')

// QueryString => query property on the request object
// localhost:3000/person?name=JohnDoe
router.get('/person', (req, res) => {
    if (req.query.name) {
        res.send(utils.format('You have requested a person %s', req.query.name))
    } else {
        res.send('You have requested a person')
    }
})

// Params property on ther request object
// localhost:3000/person/natintosh
router.get('/person/:name', (req, res) => {
    
    res.send(utils.format('You have requested a person %s', req.params.name))
})

router.get('/error', (req, res) => {
    throw new Error('This is a forced error')
})

module.exports = router