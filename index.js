require('dotenv').config();

const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const { router: apiRouter } = require('./routes/api/index.js');

var app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));

app.use(bodyParser.json())

const port = process.env.PORT;

// respond with "hello world" when a GET request is made to the homepage
app.use('/api', apiRouter);
//app.use('/backend', backendRouter);

app.listen(port, () => {
    console.log(`Japan80 API listening on port http://localhost:${port}`);
}); 