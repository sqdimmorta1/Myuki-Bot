const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, perms) => {

    const permsEmbed = new Discord.RichEmbed()

    .setTitle("Seems like you're missing a required argument:")
    .setDescription(`<:myuki_warning:508157875563134986> Error: \`\`You don't have permissions to manage messages!\`\``)
    .setTimestamp()
    .setColor("#170041");

  if(!message.member.hasPermission("MANAGE_MESSAGES"))
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(permsEmbed)

  message.delete();
  let botmessage = args.join(" ");
  const botEmbed = new Discord.RichEmbed()
  .setDescription(botmessage)
  .setFooter(`Said: ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)
  .setTimestamp();

message.channel.send(botEmbed)
}

module.exports.help = {
  name: "say"
}
