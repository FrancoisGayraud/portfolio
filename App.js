const express = require('express');
const app = express();
const parser = require('body-parser');
var request = require('request');
var jsonParser = parser.json();
var urlencodedParser = parser.urlencoded({ extended: false });

app.post('/', urlencodedParser, (req, res) => {
  var options = {
    "url": 'https://api-feedbook.herokuapp.com/api/v1/login',
    "headers": {
      'Content-Type': 'application/json'
    },
    "body": JSON.stringify({
      "email" : req.body.email,
      "password" : req.body.password
    })
  };

  request.post(options, (err, res, body) => {
    console.log(body);
  });

  res.sendStatus(200);
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/home.html');
});

app.listen(8080, () => {
  console.log('http://localhost:5656');
});