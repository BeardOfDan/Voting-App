const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const KEYS = require('./config/keys');

express.json();

app.get('/', (req, res, next) => {
  res.send('Voting App');
});



if (process.env.NODE_ENV === 'production') {
  // Ensures that express knows to use the 'build' of the client side code
  app.use(express.static('client/build'));

  // Ensures that React Router handles any unhandled paths
  const path = require('path');
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
