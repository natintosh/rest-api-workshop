let mongoose = require('mongoose')

const server = 'ds253587.mlab.com:53587'
const database = 'rest-api-workshop'
const user = 'admin'
const password = 'admin1234'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, { useNewUrlParser: true })

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)