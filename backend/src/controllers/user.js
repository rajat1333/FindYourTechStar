/* eslint-disable quotes */
const constants = require("../../constants.json");
const Users = require("../models/UserModel");

const getAllUsers = (req, res) => {
  Users.find({}, (error, mongoUser) => {
    if (error) {
      console.log(`Error is ${error}`);
    }
    if (mongoUser) {
      console.log(mongoUser);
      res.status(200).end(JSON.stringify(mongoUser));
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end("Unable to fetch users");
    }
  });
};
module.exports = getAllUsers;
