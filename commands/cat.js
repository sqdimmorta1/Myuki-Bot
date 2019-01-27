const Discord = require('discord.js');
const superagent = require("superagent");

module.exports.run = async (bot, message, args, ops) => {

  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/meow`);

  let meowembed = new Discord.RichEmbed()

    .addField("<a:GWpepelandHeartBeat:512640060085239819> Cute animal :з", "Cuter than you >:)")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(meowembed)
};
