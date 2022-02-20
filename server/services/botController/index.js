const Telegraf = require('telegraf');
const {getUser} = require('../dbController/index')
const {botToken} = require('../../credentials/telegramBotToken.json')

const SethBoth = new Telegraf.Telegraf(botToken);
console.log('bot is ready', process.env.BOT_TOKEN);

SethBoth.hears('Привет', (ctx) => {
  console.log('hello got', ctx.from, ctx.chat);
  getUser(ctx.from.id)
  .then((result) => {
    console.log("user is", result);
    ctx.reply(`Ну привет ${result.Role}`);
  })
  .catch(() => {
    ctx.reply(`Тебя нет в моих списках червь`);
  })
})

SethBoth.on('text', (ctx) => {
  console.log('//////////  /////////  ///////////  ///////////  //////')
  console.log('some random message', ctx)
  console.log('//////////  /////////  ///////////  ///////////  //////')
  console.log('from', ctx.from)
  console.log('//////////  /////////  ///////////  ///////////  //////')
  console.log('message', ctx.message)
  console.log('//////////  /////////  ///////////  ///////////  //////')
  console.log('entities', ctx.message.entities)
  console.log('//////////  /////////  ///////////  ///////////  //////')
})

SethBoth.on('chat_member', (ctx) => {
  console.log('some chat member happened');
})

SethBoth.on('my_chat_member', (ctx) => {
  console.log('my chat member happened');
})

SethBoth.on('new_chat_members', (ctx) => {
  console.log('new chat member happened');
})

SethBoth.on("channel_chat_created",
   (ctx) => {
  console.log('channel_chat_created happened');
})

SethBoth.on("group_chat_created",
  (ctx) => {
    console.log('group_chat_created happened');
  })


SethBoth.launch();

module.exports = SethBoth;

