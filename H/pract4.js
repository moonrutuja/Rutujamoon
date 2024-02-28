var fs = require ('fs')
var http = require('http')
var server = http.createServer(function(req,res){
    fs.appendFile('input.txt','Hello World!!!',function(err)
    {
        if(err) throw err;
         console.log('File Saved successfully..');
    });
})
server.listen(5000)