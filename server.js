const express= require('express'),
path = require('path');
const app =express();

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(middlewares);
server.use(router);
server.listen(port);
app.use(express.static('./dist/game'));

app.get('/*', (req,res)=>{
    
res.sendFile(path.join(__dirname,'/dist/game/index.html'));

});

app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
})

