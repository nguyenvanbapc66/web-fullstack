const userModel = require('../models/users');

module.exports = {
  getUsers: function(req, res) {
    userModel.find({})
      .populate('_class_id')
      .exec(function(err, data) {
        if (err) {
          res.json({
            err: err,
            success: false
          })
        } else {
          res.json({
            data: data,
            success: true
          })
        }
      })
  },

  createUser: function(req, res) {
    console.log(req.body)
    const newUser = new userModel(req.body);
    newUser.save(function(err, data) {
      if (err) {
        res.json({
          err: err,
          success: false
        })
      } else {
        res.json({
          data: data,
          success: true
        })
      }
    })
  },

  editUser: function(req, res) {
    userModel.findOneAndUpdate(
      { _id: req.params.user_id },
      { $set: req.body },
      function(err, data) {
        if (err) {
          res.json({
            err: err,
            success: false
          })
        } else {
          res.json({
            data: data,
            success: true
          })
        }
      })
  },

  deleteUser: function(req, res) {

  },

  getUsersByClass: function(req, res) {
    console.log(req)
    if(req.user.role === 'TEACHER') {
      userModel.find({ _class_id: req.params.class_id }, function(err, data) {
        if (err) {
          res.json({
            err: err,
            success: false
          })
        } else {
          res.json({
            data: data,
            success: true
          })
        }
      })
    } else {
      res.json({
        message: 'Bạn không có quyền thực hiện hành động này',
        success: false
      })
    }
  }
}