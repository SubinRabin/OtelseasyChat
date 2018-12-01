var express = require('express');
var mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'testChat'
});

connection.connect(error => {
	if (error) {
		console.log('DB connection error');
	} else {
		console.log('DB connection success..');
	}
})

module.exports = connection;
