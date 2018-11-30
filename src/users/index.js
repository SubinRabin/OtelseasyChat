var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'testChat'
});

// Query

const SELECT_USERS = 'SELECT * FROM ChatTblUsers';

connection.connect(error => {
	if (error) {
		console.log('DB connection error');
	} else {
		console.log('DB connection success..');
	}
});

app.use(cors());

app.get('/',(req,res)=> {
	res.send('Authentication proplem');
})

app.get('/users',(req,res) => {
	connection.query(SELECT_USERS,(err,results) => {
		if(err) {
			return res.send(err)
		} else {
			return res.json({
				data:results
			})
		}
	})
})
console.log('listen : 4000');
app.listen(4000);