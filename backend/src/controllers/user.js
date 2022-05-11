/* eslint-disable quotes */
const constants = require("../../constants.json");
const Users = require("../models/UserModel");

exports.getAllUsers = (req, res) => {
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


exports.getUserByUserId = (req, res) => {
  console.log("inside getUserByUserId");
  Users.findById(req.params.userId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

