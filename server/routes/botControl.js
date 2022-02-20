const express = require('express');
const botMessageRouter = express.Router();
const bodyParser = require('body-parser')
const SethBoth = require('../services/botController');

const jsonParser = bodyParser.json()

botMessageRouter.post('/sendMessage', jsonParser, function(req, res){
  SethBoth.telegram.sendMessage(chatId, req.body.message)
  .then(() => {
    res.send('Message send');
  })
})

module.exports = botMessageRouter;