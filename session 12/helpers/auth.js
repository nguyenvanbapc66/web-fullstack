const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../constants/auth')

module.exports = {
    generateToken: function(user, cb) {
        // user information
        const userData = {
            _id: user._id,
            username: user.username,
            role: user.role
        }

        jwt.sign(
            {data: userData},
            SECRET_KEY,
            {
                algorithm: 'HS256',
                expiresIn: '7d'
            }, function(error, token) {
                cb(error, token)
            }
        )
    },

    verifyToken: function(token, cb) {
        jwt.verify(token, SECRET_KEY, function(error, decoded) {
            cb(error, decoded)
        })
    }
}