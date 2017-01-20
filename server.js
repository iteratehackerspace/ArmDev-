'use strict'

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const db_url = 'mongodb://localhost:27017/ArmDev';
const body_parser = require('body-parser');
const json_parser = body_parser.json();
const form_parser = body_parser.urlencoded({extended: true});
http.listen(8080);

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/build/index.html');
});
app.post('/user_registration', json_parser, form_parser, (req, res) => {
  const userData = req.body;
  console.log(userData);
  MongoClient.connect(db_url, (err, db)=>{
    if (err){
      console.log('Error connecting to the DB: ' + err);
    } else {
      console.log("Successfully connected to the DB.");
        const collection = db.collection('users');
        collection.insert([userData], (err, result)=>{
          if (err){
            console.log("Could not insert in the DB: " + err);
          } else {
            console.log("Successfully added the new user to the DB.");
          }
          db.close();
        });
    }
  });
});
app.use(express.static('build'));
