import express from 'express';
// const express = require('express');

// const app = express();
const port = 8800;


const app: express.Application = express();

// Allow any method from any host and log requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

app.get('/', (req, res) => {
  res.send([{ message: '- Jeopardy game -' }]);
});

app.listen(port, 'localhost', () => {
  console.log('Jeopardy game. Port: ' + port);
});
