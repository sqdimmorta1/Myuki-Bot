const Discord = require('discord.js');
const superagent = require("superagent");

module.exports.run = async (bot, message, args, ops) => {

let {
  body
} = await superagent
  .get(`https://nekos.life/api/v2/img/8ball`);

let ballembed = new Discord.RichEmbed()

  .setImage(body.url)
  .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)
  .setColor("BLURPLE")

message.channel.send(ballembed)
};
