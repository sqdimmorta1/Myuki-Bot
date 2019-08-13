const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

if(!args[0] || args[0] == 1) {
          message.channel.send("вы не указали сообщение!");
};
  
if(args[0] == "Привет"){
  
  let rmsg = [
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

const rmsgc = rmsg[Math.floor(Math.random() * rmsg.length)]

message.channel.send(rmsgc);
  return;
};

}

