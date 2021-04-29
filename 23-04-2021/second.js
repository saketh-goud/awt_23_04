var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('welcome.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<center><h2>Reading message from file</h2></center>")
        if(err)
            throw err;
        res.write(data);
        return res.end();
    });
}).listen(8089);