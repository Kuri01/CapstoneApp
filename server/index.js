const express = require('express');
const { departures } = require('./mockData');
var cors = require('cors');
const app = express();
const port = 3001;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { users } = require('./users');

app.use(cors({ origin: '*' }));

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/departures', (req, res) => {
  const { valueFrom, valueTo, date } = req.query;
  let newArr = [];
  departures.map((element) => {
    if (
      element.description.departureCity === valueFrom &&
      element.description.arrivalCity === valueTo &&
      element.description.date === date
    ) {
      newArr.push(element);
    }
  });

  res.json([...newArr]);
});

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

const verifyJWT = (req, res) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.send('We need a token');
  } else {
    jwt.verify(token, 'jwtSecret', (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: 'u failed authentication' });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get('/isUserAuth', verifyJWT, (req, res) => {
  res.send('you are authenticated');
});

app.get('/seats', verifyJWT, (req, res) => {});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req);
  let foundUser = users.find((user) => user.details.email === username);

  if (foundUser !== undefined) {
    bcrypt.compare(password, foundUser.details.password, (err, response) => {
      if (response) {
        const id = foundUser.id;
        const token = jwt.sign({ id }, 'jwtSecret', {
          expiresIn: 300,
        });

        // req.session.user = foundUser;
        res.json({
          auth: true,
          token,
          result: foundUser,
        });
      } else {
        res.json({
          auth: false,
          message: 'Wrong password!',
        });
      }
    });
  } else {
    res.json({
      auth: false,
      message: 'User does not exist!',
    });
  }
});

module.exports = app;
