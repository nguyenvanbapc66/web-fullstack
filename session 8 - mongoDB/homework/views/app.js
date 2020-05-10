const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = mongoose.connection;
const app = express();
const Course = require("../models/course");
const Class = require("../models/classes");
const Member = require("../models/members");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/courseManager", {useNewUrlParser: true, useFindAndModify: false});

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("DB connected");
});

// CRUD Course DB ------------------------------------------------------------------------------------
app.post("/api/create-course", (req, res) => {
    let newCourse = new Course(req.body);

    newCourse.save((err, data) => {
        checkErrorAndResponseMessage(res, err, data, 'message', 'Created successfully!')
    })
});

app.get('/api/get-courses', (req, res) => {
    Course.find({}, (err, data) => {
        checkErrorAndResponseData(res, err, data)
    })
})

app.put('/api/update-course', (req, res) => {
    let newCourse = {
        coursename: req.body.coursename
    }

    Course
        .findOneAndUpdate({coursename: req.query.coursename}, {$set: newCourse})
        .then(result => {
            res.status(200).json({message: 'Updated successfully!'})
        })
})

app.delete('/api/delete-course', (req, res) => {
    Course
        .findOneAndDelete({coursename: req.query.coursename})
        .then(result => {
            res.status(200).json({message: 'Deleted successfully!'})
        })
})

// CRUD Class DB --------------------------------------------------------------------------------
app.post("/api/create-class", (req, res) => {
    let newClass = new Class(req.body);

    newClass.save((err, data) => {
        checkErrorAndResponseMessage(res, err, data, 'message', 'Create successfully')
    })
});

app.get('/api/get-classes', (req, res) => {
    Class.find({}, (err, data) => {
        checkErrorAndResponseData(res, err, data)
    })
})

app.get('/api/get-class', (req, res) => {
    Class.find({_course_id: req.query._course_id}, (err, data) => {
        checkErrorAndResponseData(res, err, data)
    })
})

app.put('/api/update-class', (req, res) => {
    let newClass = {
        classname: req.body.classname,
        _course_id: req.body._course_id
    }

    Class
        .findOneAndUpdate({classname: req.query.classname}, {$set: newClass})
        .then(result => res.status(200).json({message: 'Updated successfully!'}))
})

app.delete('/api/delete-class', (req, res) => {
    Class
        .findOneAndDelete({classname: req.query.classname})
        then(result => res.status(200).json({message: 'Deleted successfully!'}))
})

// CRUD Member DB --------------------------------------------------------------------------------------
app.post("/api/create-member", (req, res) => {
    let newMember = new Member(req.body);

    newMember.save((err, data) => {
        checkErrorAndResponseMessage(res, err, data, 'message', 'Create successfully')
    })
});

app.get("/api/get-members", (req, res) => {
    console.log(res.json)
    Member.find({}, (err, data) => {
        checkErrorAndResponseData(res, err, data)
    })
});

app.get("/api/get-member", (req, res) => {
    Member.find({_class_id: req.query._class_id}, (err, data) => {
        checkErrorAndResponseData(res, err, data)
    })
});

app.put("/api/update-member", (req, res) => {
    let newMember = {
        username: req.body.username,
        age: req.body.age,
        major: req.body.major,
        _class_id: req.body._class_id
    }

    Member
        .findOneAndUpdate({username: req.query.username}, {$set: newMember})
        .then(result => res.status(200).json({message: 'Updated successfully!'}))
});

app.delete("/api/delete-member", (req, res) => {
    console.log(req)
    Member
        .findOneAndDelete({username: req.query.username})
        .then(result => res.status(200).json({message: 'Deleted successfully!'}))
});

app.listen(3000, () => console.log("Listening on port 3000"));

function checkErrorAndResponseMessage(res, err, data, message, text) {
    if (err) {
        res.json({
            message: err,
        });
    } else {
        res.json({
            [message]: text,
            data: data,
        });
    }
}

function checkErrorAndResponseData(res, err, data) {
    if(err) {
        res.json({
            message: err
        })
    } else {
        res.json({
            data: data
        })
    }
}
