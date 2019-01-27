const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {

  if(args[0] == "help"){
    const help5 = new Discord.RichEmbed()
    .setColor("#7a738e")
    .setTitle(`Help $userinfo`)
    .setFooter(`Type $userinfo <user> to use | Type $help 1 to view default commands`)
    .addField(":gear: Command", "Display user's info")
  message.channel.send(help5);
    return;
  }

    if(message.mentions.members.size == 0) {

    const user = message.author;
    const member = message.guild.member(user);

      let embed1 = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setThumbnail(`${message.author.avatarURL}`)
    .addField('ﾠ', `{moment.lang("ru")
moment(message.author.createdAt).fromNow();}`)
    .setFooter(`ID: ${message.author.id}`)
    .setColor("#170041")
    .setTimestamp();

      message.channel.send(embed1);
    return;
    }
}
