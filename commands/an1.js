const Discord = require("discord.js");
const moment = require("moment");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  const user = message.author;
  const member = message.guild.member(user);

  const no = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``This command is only for Owner!``")
  .setTimestamp()
  .setColor("#170041");

  if (!botconfig.owners.includes(message.author.id)) return message.channel.send(no);

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .addField("**Hello there!**", "Add Owner's bot, me!")
    .setColor("#170041")
    .setThumbnail(`${user.displayAvatarURL}`)
    .addField("ﾠ", `<:myuki_reload:508157200317808641> Multifunctional bot
    - <:myuki_videocard:509743877897584650> Default commands
    - <:myuki_suspect:510105085217603605> Moderator commands
    - <:myuki_games:510438955603329024> Fun and NSFW commands
    <a:myuki_load:508156791851319296> Soon we will make the bot even better!`)
    .setFooter(`Bot's creator: ${message.author.username}#${message.author.discriminator}`)

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
