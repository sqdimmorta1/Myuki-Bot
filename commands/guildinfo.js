const Discord = require("discord.js");
const moment = require("moment");
const botconfig = require("../botconfig.json");
module.exports.run = async (bot, message, args) => {

  const user = message.author;
  const member = message.guild.member(user);

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("BLURPLE")
    .setThumbnail(sicon)
    .addField(`${message.guild.name}`, `<:myuki_crown:508178920571666432> Guildmaster: **${message.guild.owner}**
    Region: **${message.guild.region}**
    Created at: **${moment.parseZone(message.guild.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
    You joined: **${moment.parseZone(message.guild.members.find('id', message.author.id).joinedAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
    Total members: **${message.guild.memberCount}**
    Members: **${member.guild.members.filter(m => !m.user.bot).size}**
    Bots: **${member.guild.members.filter(m => m.user.bot).size}**
    Channels: **${message.guild.channels.size}**
    Roles: **${message.guild.roles.size}**`)

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
