/* eslint-disable linebreak-style */
/* eslint-disable indent */
const Messages = require('../models/messageModel');

exports.createMessage = (req, res) => {
    const message = req.body;
    // match.matchTimeStamp = new Date();
    Messages.create(message, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
};

exports.getMessagesByUserId = (req, res) => {
    const { userId } = req.params;
    Messages.find({ $or: [{ fromId: userId }, { toId: userId }] }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            const sortedData = data.sort((a, b) => a.timeStamp - b.timeStamp);
            res.status(200).send(sortedData);
        }
    });
};
