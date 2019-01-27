const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {

  let rnsfw = [
    'Yes',
    'No',
    'Yes, please',
    'Nope',
    'Immorta1?',
    'funlennysub?',
    'I dont know',
    'Maybe later?',
    'Yes, I am',
    'No, I am not',
    
  ]

  const rnsfwc = rnsfw[Math.floor(Math.random() * rnsfw.length)]


    if(message.mentions.members.size == 0) {

    const user = message.author;
    const member = message.guild.member(user);

      message.channel.send(rnsfwc);
    return;
    }

}
