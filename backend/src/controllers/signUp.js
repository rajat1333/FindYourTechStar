const constants = require('../../constants.json');
const Users = require('../models/UserModel');

const signUp = (req, res) => {
  const inputUser = new Users({
    user_name: req.body.username,
    password: req.body.password,
    email_id: req.body.emailId,
  });
  console.log('Inside Sign Up Post Request');
  console.log('inputUser : ', inputUser);

  Users.findOne(inputUser, (error, mongoUser) => {
    console.log(`users find ${mongoUser}`);
    console.log(`Error is ${error}`);
    if (error) {
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end();
    }
    if (mongoUser) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(constants.USER_ALREADY_EXISTS);
    } else {
      // eslint-disable-next-line no-shadow
      inputUser.save((error, data) => {
        if (error) {
          res.writeHead(500, {
            'Content-Type': 'text/plain',
          });
          res.end();
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/plain',
          });
          res.end(constants.USER_CREATED);
        }
      });
    }
  });
};
module.exports = signUp;
