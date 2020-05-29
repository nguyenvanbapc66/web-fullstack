const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}))

mongoose.connect('mongodb://localhost/classManager', {
  useNewUrlParser: true
});

app.use('/api', router);

// connect database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected');
});

app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function () {
  console.log(`Server start on ${app.get('port')}`)
});