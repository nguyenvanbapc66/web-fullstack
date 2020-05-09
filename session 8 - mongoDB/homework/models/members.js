const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    age: Number,
    major: String,
    _class_id: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }
})

module.exports = mongoose.model('Member', memberSchema)