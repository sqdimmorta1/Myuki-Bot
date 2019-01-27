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
    .setThumbnail(`${message.author.avatarURL}`)
    .addField(`<:molecularUser:508290171121303556> ${message.author.tag}`, `[Avatar](${message.author.avatarURL})
    Created: **${moment.parseZone(message.author.createdAt).locale('en').format('dd, DD/MM/YYYY, HH:mm')}**
    Joined: **${moment.parseZone(message.guild.members.find('id', message.author.id).joinedAt).locale('en').format('dd, DD-MM-YYYY, HH:mm')} **
    Status: **${message.author.presence.status}**
    Game: **${message.author.presence.game ? message.author.presence.game : 'None'}**
    Bot: **${message.author.bot}**
    Roles[**${message.member.roles.size - 1}**]: ${message.member.roles.map(r => `<@&${r.id}>`).slice(1).join(",  ")}`)
    .setFooter(`ID: ${message.author.id}`)
    .setColor("BLURPLE")
    .setTimestamp();

      message.channel.send(embed1);
    return;
    }

        if(message.mentions.members.size == 1) {

          let memberToFind = message.mentions.members.first();


          let embed = new Discord.RichEmbed()
        .setThumbnail(`${memberToFind.user.avatarURL}`)
        .addField(`<:molecularUser:508290171121303556> ${memberToFind.user.tag}`, `[Avatar](${memberToFind.user.avatarURL})
        Created: **${moment.parseZone(memberToFind.user.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
        Joined: **${moment.parseZone(message.guild.members.find('id', memberToFind.id).joinedAt).locale('en').format('DD/MM/YYYY, HH:mm')} **
        Status: **${memberToFind.presence.status}**
        Game: **${memberToFind.presence.game ? memberToFind.presence.game : 'None'}**
        Bot: **${memberToFind.user.bot}**
        Roles[**${memberToFind.roles.size - 1}**]: ${memberToFind.roles.map(r => `<@&${r.id}>`).slice(1).join(",  ")}`)
        .setFooter(`ID: ${memberToFind.id}`)
        .setColor("BLURPLE")
        .setTimestamp();

          message.channel.send(embed);
return;
}

}
