'use strict';
const Manager = require('./Manager.js'); //for the security reasons this class has been added to gitignore.
let manager = new Manager();

const app = require('express')();
const cors = require('cors')
const bodyParser = require('body-parser');
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = manager.dburl;

//Enable CORS
app.use(cors());

//Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.post('/test', (req, res) => {
	// console.log(req.body.header);
	// console.log(req.body.description);
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		  var msg = {header: req.body.header, description: req.body.description};
		  db.collection("testi").insertOne(msg, function(err, res) {
		    if (err) throw err;
		    // console.log(msg);
		    db.close();
		  });
	});
	
});

app.get('/messages', (req, res) => {
	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  db.collection("testi").find({}).toArray(function(err, result) {
		    if (err) throw err;
		   // console.log(result);
		    res.json(result);
		    db.close();
		  });
		});  
	});

const port = process.env.PORT ? process.env.PORT : 8080;
const server = app.listen(port, () => {
    console.log("Server listening  port %s", port);
});



//MongoClient.connect(url, function(err, db) {
//	if (err) throw err;
//	  var msg = { message: "HALOO SAATANA" };
//	  db.collection("testi").insertOne(msg, function(err, res) {
//	    if (err) throw err;
//	    console.log("1 document inserted");
//	    db.close();
//	  });
//});


