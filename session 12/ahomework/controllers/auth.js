const mongoose = require('mongoose')
const auth = require('../helpers/auth')
const userModel = require('../models/user')

module.exports = {
    login: function(req, res) {
        userModel.findOne({username: req.body.username}, function(err, data) {
            if(err) {
                res.json({
                    success: false,
                    error: err,
                    message: 'Tài khoản hoặc mật khẩu không đúng'
                })
            } else {
                if(data.password === req.body.password) {
                    auth.generateToken(data, function(error, token) {
                        if(error) {
                            res.json({
                                success: false,
                                error: error
                            })
                        } else {
                            res.json({
                                success: true,
                                data: {
                                    _id: data._id,
                                    username: data.username,
                                    fullname: data.fullname,
                                    age: data.age,
                                    role: data.role
                                },
                                message: 'Bạn đã đăng nhập thành công'
                            })
                        }
                    })
                } else {
                    res.json({
                        success: false,
                        message: 'Tài khoản hoặc mật khẩu không đúng'
                    })
                }
            }
        })
    }
}