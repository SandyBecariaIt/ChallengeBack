var express = require('express');
var bodyParser = require('body-parser');
var Info = require('./../routers/moneyRouter');
var data = require('../routers/dataRouter');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routers

app.get('/getInformation', Info);
app.post('/editData', data);

module.exports = app;