const jwt = require('jsonwebtoken');
const constants = require('../../constants.json');

const {secret} = global.gConfig;
const { auth } = require('../../passport');

auth();
const Users = require('../models/UserModel');

const login = (req, res) => {
  console.log('Inside Login Post Request');
  console.log('Req Body : ', req.body);
  const msg = {};
  msg.body = req.body;
  Users.findOne({ email_id: msg.body.emailId, password: msg.body.password }, (error, mongoUser) => {
    console.log(`users find ${mongoUser}`);
    console.log(`Error is ${error}`);
    if (error) {
        console.log(`Error is ${error}`);
    }
    if (mongoUser) {
      console.log(`User from mongo is  ${JSON.stringify(mongoUser)}`);

      // eslint-disable-next-line no-underscore-dangle
      const payload = { _id: mongoUser._id, username: mongoUser.email_id};
      const token = jwt.sign(payload, secret, {
          expiresIn: 1008000,
      });
      res.status(200).end(`JWT ${token}`);
    } else {
      res.writeHead(200, {
          'Content-Type': 'text/plain',
      });
      res.end(constants.INVALID_CREDENTIALS);
      console.log('Invalid credentials');
    }
  });
};
module.exports = login;
