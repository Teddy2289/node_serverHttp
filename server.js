// Import 

var express = require('express');
const { status } = require('express/lib/response');

//instanciation du server 

var server = express();


//configuration du route 

server.get('/',function(req,res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour sur mon serveur</h1>');
});

server.listen(8080,function(){
    console.log('Server en ecoute :)');
});