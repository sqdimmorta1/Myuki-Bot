const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json");

const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

var prefix = botconfig.prefix;




const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

exports.run = (bot, message, args) => {
  if (args.length < 1) {
    throw '**Enter emoji name**';
  }

  message.channel.send(
    args.join(' ')
    .split('')
    .map(c => mapping[c] || c)
    .join('')
  );
};
