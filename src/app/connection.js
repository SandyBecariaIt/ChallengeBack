'use strict'

var mysql = require('mysql');
//var app = require('./app/app');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pi=3.1416',
    database: 'PaymentMachine'
});

module.exports = connection;