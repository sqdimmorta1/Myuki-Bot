const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  const user = message.author;
  const member = message.guild.member(user);

  const top = bot.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()

  const embed = new Discord.RichEmbed()
  .addField(`<:molecularNewGroup:508290171310178324> Top 5 servers`, `**1) ${top[0].name}**
    <:molecularUser:508290171121303556> ${top[0].memberCount} members
    **2) ${top[1].name}**
    <:molecularUser:508290171121303556> ${top[1].memberCount} members
    **3) ${top[2].name}**
    <:molecularUser:508290171121303556> ${top[2].memberCount} members
    **4) ${top[3].name}**
    <:molecularUser:508290171121303556> ${top[3].memberCount} members
    **5) ${top[4].name}**
    <:molecularUser:508290171121303556> ${top[4].memberCount} members`)
  .setColor("BLURPLE");

  message.channel.send(embed);

}
