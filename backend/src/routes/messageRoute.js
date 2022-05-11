/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

// Import match Controller
const messageController = require('../controllers/messageController');

// Get all matches
// router.get('/', matchController.getAllMatches);

// Get all messages for a userId
router.get('/:userId', messageController.getMessagesByUserId);

// Create message
router.post('/', messageController.createMessage);

module.exports = router;
