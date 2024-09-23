/*var http = require ('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen (4000, '127.0.0.1');
console.log('yo dawg, now listeninig to port3000') */

// READABLE STREAM//
/*var http = require ('http');
var fs = require ('fs');

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.on ('data', function (chunk){
    console.log('new chunk recieved')
    myWriteStream.write(chunk)
})*/

//PIPES//

var http = require ('http');
var fs = require ('fs');

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.pipe(myWriteStream);