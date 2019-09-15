'use strict';
  const express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 3002,
  mongoose = require('mongoose'),
  User = require('./api/models/UserModel'),
  url = require('./url'),
  bodyParser = require('body-parser'),
  config = require('config'),
  cookieParser = require('cookie-parser');
  // expressip = require('express-ip');
  
// mongoose instance connection url connection
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
const db = mongoose.connection;
db.on('error', function (error) {
  console.log("Connection error", error);
})
db.once('open', function () {
  console.log("Connected on MongoDB");
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(cors({credentials: true, origin: config.get('origin')}));
app.use(cookieParser());
// app.use(expressip().getIpInfoMiddleware);
const testRoute = require('./api/routes/ContactRoute'); //importing route
testRoute(app); 

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('RESTful API server started on: ' + port);
