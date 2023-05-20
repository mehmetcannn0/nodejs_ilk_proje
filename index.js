var http = require("http");
var fs= require("fs")

var server =http.createServer((req,res)=>{


    if (req.url =="/") {
        fs.readFile("index.html",(err,html)=>{
            res.write(html);
            res.end();
        })
    } else if(req.url =="/yemekler"){
        fs.readFile("yemekler.html",(err,html)=>{
            res.write(html);
            res.end();
        })
    }else {
        fs.readFile("404.html",(err,html)=>{
            res.write(html);
            res.end();
        })
    }



});

server.listen(3000,()=>{
    console.log("node.js server at port 3000");
    console.log("http://127.0.0.1:3000/");
})