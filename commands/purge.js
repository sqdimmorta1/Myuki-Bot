
const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {

  const permEmbed = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't have any permissions to MANAGE_MESSAGES``")
  .setTimestamp()
  .setColor("BLURPLE");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(permEmbed);

  const pEmbed = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't specify count of messages to delete!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if(!args[0]) return message.channel.send(pEmbed);
  message.channel.bulkDelete(args[0]).then(() => {

    const clearEmbed = new Discord.RichEmbed()
    .addField("<:molecularYes:508290171507310631> Successfuly!", `<:molecularDelete:508290171389870100> Deleted ${args[0]} messages!`)
    .setTimestamp()
    .setColor("BLURPLE");

  message.channel.send(clearEmbed).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}
