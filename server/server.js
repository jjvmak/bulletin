//test
const http = require('http');

const hostname = 'localhost';
const port = 8080;

const app = require('express')();
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors());



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.post('/sightings', (req, res) => {
	  req.body.id = (sightings.length + 1).toString();
	  sightings.push(req.body);
	  res.json(req.body);
	});