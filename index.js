const express = require('express');
const app = express();

const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 5000;
const KEYS = require('./config/keys');

express.json();

mongoose.connect(KEYS.mongoURI);

app.use(
  cookieSession({
    'maxAge': 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    'keys': [KEYS.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Mongoose Models
require('./models/User');

require('./services/passport');

// Routes
require('./routes/authRoutes')(app);

app.get('/', (req, res, next) => {
  res.send('Voting App <a href="/asdf">asdf</a>');
});

app.get('/asdf', (req, res, next) => {
  res.send('asdf <a href=\"/">home</a>');
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
