const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  const permsEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't have permissions to manage messages!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if (!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(permsEmbed);


  let warnmember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  const playerEmbed = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``I can't find user!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if (!warnmember) return message.channel.send(playerEmbed);
  let reason = args.slice(1).join(" ");

  const reasonEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't specify the reason!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if (!reason) reason = reasonEmbed;

  message.delete().catch(O_o => {});

  message.channel.send(`<:molecularYes:508290171507310631><@${warnmember.id}> has been warned.`);

  const warnaEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .addField(`:grey_exclamation: **Warn Info**`, `You have been warned in **${message.guild.name}**
    Warned by: **${message.author.tag}**
    Reason: **${reason}**`)

  await warnmember.send(warnaEmbed)
}
