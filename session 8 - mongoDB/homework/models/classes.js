const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classSchema = Schema({
    classname: {
        type: String,
        require: true
    },
    _course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
})

module.exports = mongoose.model('Class', classSchema)