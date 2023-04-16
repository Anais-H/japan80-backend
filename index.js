require('dotenv').config();

const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const { router: apiRouterV1 } = require('./routes/api/v1/index.js');
const { apiErrorHandler } = require('./middlewares/apiErrorHandler.js');
const helmet = require('helmet');

var app = express();

app.use(helmet());

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));

app.use(bodyParser.json())

const port = process.env.PORT;

app.use('/api/v1', apiRouterV1);

// error handling at the very end
app.use(apiErrorHandler);

app.listen(port, () => {
    console.log(`Japan80 API listening on port http://localhost:${port}`);
}); 