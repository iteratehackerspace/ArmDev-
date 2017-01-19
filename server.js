'use strict'

const express = require('express');
const app = express();
const http = require('http').createServer(app);
http.listen(8080);

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/build/index.html');
});
app.use(express.static('build'));
