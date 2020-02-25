const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000
const api = require('./api')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/question', (req, res) => {
    let options = {
      root: path.join(__dirname, 'public')
    }
    res.sendFile('./questions.ejs', options)
})

app.use(express.static('./public'))
app.use('/api', api)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))