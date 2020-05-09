const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = Schema({
    coursename: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Course', courseSchema)