const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`:ping_pong: Pong!`)
  .setTimestamp()
  .setDescription(`API latency: **${Math.round(bot.ping)}ms**`)
             message.channel.send(embed);


}
