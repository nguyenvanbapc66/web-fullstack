const fs = require('fs')

const fileSystem = {
    readFile: function(req, res, cb){
        fs.readFile('./text.txt', function(err, data){
            cb(err, data)
        })
    }
}

module.exports = fileSystem 