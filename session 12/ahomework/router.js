const express = require('express')

const router = express.Router()

const statusController = require('./controllers/status')
const authControler = require('./controllers/auth')
const userController = require('./controllers/user')

router.route('/login').post(authControler.login)

router.route('/users')
    .post(userController.createUser)
    .get(userController.getUsers)


router.route('/status-posting').post(statusController.createStatus)

module.exports = router