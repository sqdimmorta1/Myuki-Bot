const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

//page 1

if(!args[0] || args[0] == 1) {

  const help1 = new Discord.RichEmbed()

          message.channel.send("Вы не указали сообщение!");
};
if(args[0] == 'Привет', 'Ку', 'Хай', 'Hello', 'Hi', 'qq', 'q', 'кью', 'Дарова', 'Дороу', 'Здраствуйте'){
  
      let rmsg1 = [
    'Ку!',
    'qq',
    'q',
    'Дороу',
    'Хэй!',
    'Йоу',
    'Приветики!',
    'Привет',
    'Хай',
    'Ку-ку',
  ]

  const rmsg1c = rmsg1[Math.floor(Math.random() * rmsg1.length)]

message.channel.send(rmsg1c);
  return;
};

};


