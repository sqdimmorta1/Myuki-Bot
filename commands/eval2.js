const {
  inspect
} = require("util");
const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const ms = require("ms");
const moment = require("moment");
const ta = require("time-ago");
const dateformat = require("dateformat");
const encode = require('strict-uri-encode');
const ascii = require('ascii-art');
const math = require('mathjs');
const snekfetch = require('snekfetch');
const cowsay = require('cowsay');

module.exports.run = async (bot, message, args, ops) => {

  const ownEmbed = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``This command is only for Owner!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if (!botconfig.owners.includes(message.author.id)) return message.channel.send(ownEmbed);

  const code = message.content.split(" ").slice(1).join(" ");
  try {
    let evaled = eval(code);
    if (!code) {

      const cEmbed = new Discord.RichEmbed()
        .setTitle("Invalid command entered, did you mean?")
        .setDescription("<:molecularLocked:508290171452653581> Error: ``Not enough code for evaluation!``")
        .setTimestamp()
        .setColor("BLURPLE");
      return message.channel.send(cEmbed);
    }

    if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled);

    const embed = new Discord.RichEmbed()
      .setTitle(`Evaluation <:molecularYes:508290171507310631>`)
      .setColor("BLURPLE")
      .setDescription(`Input: \`\`\`js\n${code}\`\`\` Output: \`\`\`js\n${evaled}\`\`\``)
      .setFooter(`Evaluated using JavaScript 11.4.2`, `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png`)

    message.channel.send({
      embed
    });
  } catch (err) {
    const embed = new Discord.RichEmbed()
      .setTitle(`Evaluation <:molecularNo:508290171633139713>`)
      .setColor("BLURPLE")
      .setDescription(`Input: \`\`\`js\n${code}\`\`\` Output: \`\`\`js\n${(err)}\`\`\``)
      .setFooter(`Evaluated using JavaScript 11.4.2`, `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png`)

    message.channel.send({
      embed
    });
  }
}
