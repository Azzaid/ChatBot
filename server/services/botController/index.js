const Telegraf = require('telegraf');

const SethBoth = new Telegraf.Telegraf(process.env.BOT_TOKEN);
console.log('bot is ready', process.env.BOT_TOKEN);

SethBoth.on('text', (ctx) => {
  console.log('message got', ctx);
  ctx.reply(`Well hello mortal ${ctx.state.role}`)
})

SethBoth.hears('Hello', (ctx) => {
  console.log('hello got', ctx);
  ctx.reply(`Well hello mortal ${ctx.state.role}`);
})

SethBoth.launch();

module.exports = SethBoth;