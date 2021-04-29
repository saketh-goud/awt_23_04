var req=require("./module");
var obj = req();
console.log(req());
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<center><h1>Date and Time</h1></center>")

      res.write(`Time :${obj.time}`);
      res.end(`  Date :${obj.output}`);
}).listen(8001);