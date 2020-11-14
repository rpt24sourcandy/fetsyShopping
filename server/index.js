/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 3004;

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('GET request received at endpoint "/"');
});

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port}`);
});
