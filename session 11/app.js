const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/gameScore', {useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('DB connected')
})

const userSchema = new mongoose.Schema({
    username: {
        type: String
    }
})
const User = mongoose.model('User', userSchema)

const roundSchema = new mongoose.Schema({
    scores: {
        type: [Number]
    }
})
const Round = mongoose.model('Round', roundSchema)

const gameSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    rounds: {
        type: [roundSchema]
    }
})
const Game = mongoose.model('Game', gameSchema)

app.post('/users', function(req, res) {
    let newUser = new User(req.body)

    newUser.save(function(err, data) {
        if(err) {
            res.json({
                success: false,
                message: err
            })
        } else {
            res.json({
                success: true,
                message: 'Created user successfully',
                data: data
            })
        }
    })
})

app.post('/games', function(req, res) {
    let newGame = new Game(req.body)
    // const response = await newGame.save()
    // console.log(response)
    newGame.save(function(err, data) {
        if(err) {
            res.json({
                success: false,
                message: err
            })
        } else {
            res.json({
                success: true,
                message: 'Created game successfully',
                data: data
            })
        }
    })
})

app.get('/games/:gameId', function(req, res) {
    Game
        .find({_id: req.params.gameId})
        .populate('users')
        .exec(function(err, data) {
            if(err) {
                res.json({
                    success: false,
                    message: err
                })
            } else {
                res.json({
                    success: true,
                    message: 'Created game successfully',
                    data: data
                })
            }
        })
})

app.listen(port, () => console.log(`http://localhost:${port}`))