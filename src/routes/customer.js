let CustomerModel = require('../models/customer.module')
let express = require('express')
let router = express.Router()

// Create a new Customer
// POST localhost:3000/customer
router.post('/customer', (req, res) => {
    // req.body
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    // let user = {
    //     name: 'firstname lastname',
    //     email: 'email@email.com'
    // }

    let model = new CustomerModel(req.body);
    model.save()
        .then((doc) => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)             
            }

            res.status(201).send(doc)
        }).catch((err) => {
            res.status(500).json(err)
        });
})

// GET Customer Request
router.get('/customer', (req, res)=> {
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter: email')
    }

    CustomerModel.findOne({
        email: req.query.email
    })
    .then(doc =>  {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// POST Customer Request
router.put('/customer', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter: email')
    }

    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, 
    {
        new: true
    })
    .then(doc =>  {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// DELETE Customer request
router.delete('/customer', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter: email')
    }

    CustomerModel.findOneAndDelete({
        email: req.query.email
    })
    .then(doc =>  {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router