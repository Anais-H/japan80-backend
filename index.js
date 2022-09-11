var express = require('express');
var app = express();

const port = 3001

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port, () => {
    console.log(`Japan80 API listening on port ${port}`);
}); 