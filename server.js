// Import
var express = require('express');
const { status } = require('express/lib/response');
var bodyParser =  require('bodyParser');
var apiRouter = require('./apiRouter').router;

//instanciation du server 

var server = express();

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
//configuration du route 

server.get('/',function(req,res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour sur mon serveur qui essai de marcher</h1>');
});
server.use('/api/',apiRouter);
server.listen(8080,function(){
    console.log('Server en ecoute :)');
});