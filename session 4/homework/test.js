const hostname = '127.0.0.1'
const port = 3000

const http = require('http')
const fs = require('fs')
const url = require('url')
const formidable = require('formidable')

const server = http.createServer((req, res) => {
    if(req.url == '/upload' && req.method.toLowerCase() == 'post'){
        // create a form
        let form = new formidable.IncomingForm()
        
        // upload direction
        form.uploadDir = 'uploads/'
        form.parse(req, (err, fields, files) => {
            if(err) throw err

            let tmpPath = files.file.path
            let newPath = form.uploadDir + files.file.name

            fs.rename(tmpPath, newPath, (err) => {
                if(err) throw err

                switch(files.file.type){
                    case 'image/jpeg': {
                        fs.readFile(newPath, (err, fileUploaded) => {
                            res.writeHead(200, {'Content-type': 'image/jpeg'})
                            res.end(fileUploaded)
                        })
                    }
                    default: {
                        res.writeHead(200, {'Content-type': 'text/html'})
                        res.end(`Upload file <strong>${files.file.name}</strong> successfully`)
                    }
                }
            })
        })
        return
    }

    let urlData = url.parse(req.url, true)
    let fileName = './views' + urlData.pathname

    if(urlData.pathname == '/'){
        fileName = './views/index.html'
    }
    fs.readFile(fileName, (err, data) => {
        if(err){
            console.log(err)
            res.writeHead(404, {'Content-type': 'text/html'})
            res.write('404 NOT FOUND')
            res.end()
        } else{
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            res.end()
        }
    })
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http:/${hostname}:${port}`)
})