'use strict'

// var app = require('./app/app');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
const moneyRouter = require('./routers/moneyRouter');
const dataRouter = require('./routers/dataRouter');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((request, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Methods', 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE');
    res.header('Allow', 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE');

    next();
});

app.use('/money', moneyRouter);
app.use('/data', dataRouter);

app.listen(port, () => {
    console.log(`API REST funcionando en http://localhost:${port} `);
});

module.exports = app;