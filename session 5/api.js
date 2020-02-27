const express = require('express')
const router = express.Router()
const fs = require('fs')

router.route('/question')
    .get((req, res) => {
        fs.readFile('./questions.txt', 'utf8', (err, data) => {
            if(err){
                res.writeHead(404, {'Content-type': 'text/plain'})
                res.end(err)
            } else{
                const questions = data.split(/\r?\n/)
                res.render('questions', {
                    question: questions[Math.floor(Math.random() * questions.length)]
                })
            }
        })
    })
    .post((req, res) => {
        fs.writeFile('./questions.txt', req.body.question, (err, data) => {
            if(err){
                res.end('Error')
            } else{
                res.end('Success')
            }
        })
    })
    .put((req, res) => {})
    .delete((req, res) => {})

router.route('/answer')
    .post((req, res) => {
        if(req.body.rightSubmit){
            fs.writeFile('./answers.txt', req.body.rightSubmit, (err, data) => {
                if(err){
                    res.end(err)
                } else{
                    res.end('Submit successfully')
                }
            })
        } else{
            fs.writeFile('./answers.txt', req.body.wrongSubmit, (err, data) => {
                if(err){
                    res.end(err)
                } else{
                    res.end('Submit successfully')
                }
            })
        }
    })

module.exports = router