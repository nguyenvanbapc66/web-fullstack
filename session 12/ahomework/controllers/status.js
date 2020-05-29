const statusModel = require('../models/status')

module.exports = {
    createStatus: function(req, res) {
        console.log(req)
        let newStatus = new statusModel(req.body)

        newStatus.save(function(err, data) {
            if(err) {
                res.json({
                    success: false,
                    message: err
                })
            } else {
                res.json({
                    success: true,
                    message: 'Status is created',
                    data: data
                })
            }
        })
    }
}