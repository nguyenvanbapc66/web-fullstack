const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = mongoose.connection
const Schema = mongoose.Schema
const app = express()
const Course = require('./models/course')
const Class = require('./models/classes')
const Member = require('./models/members')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/courseManager", {useNewUrlParser: true})

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
    console.log('DB connected')
})

app.post('/api/create-course', (req, res) => {
    const newCourse = new Course({
        coursename: req.body.coursename
    })

    newCourse
        .save()
        .then(result => console.log(result))
        .catch(err => console.log(err))

    res.status(200).json({
        message: 'Create course successfully',
        createdCourse: newCourse
    })
})

app.post('/api/create-class', (req, res) => {
    const newClass = new Class({
        classname: req.body.classname,
        _course_id: {
            type: mongoose.Types.ObjectId(),
            ref: 'Course'
        }
    })

    newClass
        .save()
        .then(result => console.log(result))
        .catch(err => console.log(err))

    res.status(200).json({
        message: 'Create class successfully',
        createdClass: newClass
    })
})

app.post('/api/create-member', (req, res) => {
    const newMember = new Member({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        age: req.body.age,
        major: req.body.major,
        _class_id: new mongoose.Types.ObjectId
    })

    newMember
        .save()
        .then(result => console.log(result))
        .catch(err => console.log(err))

    res.status(200).json({
        messgae: 'Create member successfully',
        createdMember: newMember
    })
})

app.listen(8080, () => console.log('Listening on port 8080'))