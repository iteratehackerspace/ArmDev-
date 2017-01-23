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
const nodemailer = require('nodemailer');
http.listen(8080);

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/build/index.html');
});
/*
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: '',
      pass: ''
  }
});

const mailOptions = {
  from: '"ArmDev" <>',
  to: '',
  subject: 'Welcome',
  text: 'Welcome to ArmDev blog',
  html: '<b>Welcome to ArmDev blog!</b>'
};
*/ // nodemailer
app.post('/user_registration', json_parser, form_parser, (req, res) => {
  const userData = req.body;
  //mailOptions.to = userData.email; // nodemailer
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
            /*
            transporter.sendMail(mailOptions, (error, info) {
              if (error) {
                return console.log(error);
              }
              console.log('Message %s sent: %s', info.messageId, info.response);
            });
            */ // nodemailer
          }
          db.close();
        });
    }
  });
});
app.post('/uname_check', json_parser, form_parser, (req, res) => {
  const unameToCheck = req.body.uname;
  MongoClient.connect(db_url, (err, db)=>{
    if (err){
      console.log('Error connecting to the DB: ' + err);
      res.status(404).end();
    } else {
        console.log("Successfully connected to the DB.");
        const collection = db.collection('users');
        collection.find({uname: unameToCheck}).toArray((err, results)=> {
          if (err){
            console.log(err);
          } else{
            if (results.length===0){
              res.status(200).send(JSON.stringify({unameAvailable: 1}));
            } else{
                res.status(200).send(JSON.stringify({unameAvailable: 0}));
            }
          }
        });
    }
  });
});
app.post('/user_login', json_parser, form_parser, (req, res) => {
  const credentials = req.body;
  MongoClient.connect(db_url, (err, db)=>{
    if (err){
      console.log('Error connecting to the DB: ' + err);
      res.status(404).end();
    } else {
        console.log("Successfully connected to the DB.");
        const collection = db.collection('users');
        collection.find({uname: credentials.username}).toArray((err, results)=> {
          if (err){
            console.log(err);
          } else{
            if (results.length===0){
              res.status(200).send(JSON.stringify({respond: -1})); //user not found
            } else{
                if (credentials.password === results[0].password){
                  res.status(200).send(JSON.stringify({respond: 1})); //successfully logged in
                } else{
                    res.status(200).send(JSON.stringify({respond: 0})); //login failed
                }
            }
          }
        });
    }
  });
});
app.use(express.static('build'));
