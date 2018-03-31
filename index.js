const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const KEYS = require('./config/keys');

app.get('/', (req, res, next) => {
  res.send('Voting App');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
