const mongoose = require("mongoose")
const auth = require('../helpers/auth')
const userModel = require('../models/users')

module.exports = {
    login: function(req, res) {
        userModel.findOne({username: req.body.username}, function(err, data) {
            if(err) {
                res.json({
                    err: err,
                    message: 'Tài khoản hoặc mật khẩu không đúng',
                    success: false
                })
            } else {
                if(data.password === req.body.password) {   
                    auth.generateToken(data, function(error, token) {
                        if(error) {
                            res.json({
                                err: error,
                                success: false
                            })
                        } else {
                            res.json({
                                data: {
                                    _id: data._id,
                                    username: data.username, 
                                    fullname: data.fullname,
                                    age: data.age,
                                    role: data.role,
                                    token: token
                                },
                                success: true
                            })
                        }
                    })
                } else {
                    res.json({
                        message: 'Tài khoản hoặc mật khẩu không đúng',
                        success: false
                    })
                }
            }
        })
    },

    verifyToken: function(req, res, next) {
        auth.verifyToken(req.headers.user_token, function(err, data) {
            if(err) {
                res.json({
                    err: err,
                    message: 'Bạn cần đăng nhập để thực hiện thao tác này',
                    success: false
                })
            } else {
                req.user = data.data
                next()
            }
        })
    }
}