const app = require('express')();
const cors = require('cors')
const bodyParser = require('body-parser');

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
	console.log(req.body.id );
});

const port = process.env.PORT ? process.env.PORT : 8080;
const server = app.listen(port, () => {
    console.log("Server listening  port %s", port);
});