const userModel = require('../models/user')

module.exports = {
    createUser: function(req, res) {
        let newUser = new userModel(req.body)

        newUser.save(function(err, data) {
            if(err) {
                res.json({
                    success: false,
                    message: err
                })
            } else {
                res.json({
                    success: true,
                    message: 'User is created',
                    data: data
                })
            }
        })
    },

    getUsers: function(req, res) {
        userModel.find({}, function(err, data) {
            if(err) {
                res.json({
                    success: false,
                    message: err
                })
            } else {
                res.json({
                    success: true,
                    message: 'Users is found',
                    data: data
                })
            }
        })
    }
}