const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

//page 1

if(!args[0] || args[0] == 1) {

  const help1 = new Discord.RichEmbed()

          message.channel.send("Вы не указали сообщение!");
};
if(args[0] == "Привет"){
  
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

if(args[0] == "Ку"){
  
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


