import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schemas/schema.js';
import { root } from './graphql/roots/root.js';

var app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

const port = process.env.PORT;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port, () => {
    console.log(`Japan80 API listening on port ${port}`);
}); 