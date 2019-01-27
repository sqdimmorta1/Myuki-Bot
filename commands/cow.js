const Discord = require('discord.js');
const cowsay = require('cowsay');

module.exports.run = async (bot, message, args, tools) => {
let text = args.join(" ");
message.channel.send("```" + cowsay.say({
  text : text
}) + "```")
}
