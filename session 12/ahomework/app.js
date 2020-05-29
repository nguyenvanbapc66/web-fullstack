const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const router = require('./router')

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/fanpageManager', {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => console.log('db connected'))

app.use(express.static(__dirname + '/public'))
app.use('/public', express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/login.html')
})

app.get('/register', function(req, res) {
  res.sendFile(__dirname + '/views/register.html')
})

app.get('/fanpage/:fanpageId', function(req, res) {
  res.sendFile(__dirname + '/views/fanpage.html')
})

app.use('/api', router)

app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), function() {
  console.log(`Server start on http://localhost:${app.get('port')}`)
})