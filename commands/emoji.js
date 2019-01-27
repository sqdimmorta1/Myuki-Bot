const Discord = require('discord.js');
const moment = require("moment");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, ops, tools) => {

  const anim = {
    true: 'Animated',
    false: 'Not animated'
  }


  if (args.length < 1) {
    const embed = new Discord.RichEmbed()
    .setTitle("Invalid command entered, did you mean?")
    .setDescription(`<:molecularLocked:508290171452653581> Error: \`\`Usage - ${botconfig.prefix}emoji <:emoji:>\`\``)
    .setTimestamp()
    .setColor("BLURPLE");
    return message.channel.send({
      embed
    }).then(msg => {
      msg.delete(10000)
    });
  }

  args = args[0].split(':')[1];
  if (!args) {
    const embed = new Discord.RichEmbed()
    .setTitle("Invalid command entered, did you mean?")
    .setDescription(`<:molecularLocked:508290171452653581> Error: \`\`Usage - ${botconfig.prefix}emoji <:emoji:>\`\``)
    .setTimestamp()
    .setColor("BLURPLE");
    return message.channel.send({
      embed
    }).then(msg => {
      msg.delete(10000)
    });
  }
  args = bot.emojis.find('name', args);

  if (!args) {
    const embed = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``I can't find this emoji!``")
    .setTimestamp()
    .setColor("BLURPLE");
    return message.channel.send({
      embed
    }).then(msg => {
      msg.delete(10000)
    });
  }
  if (args) {
    const embed1 = new Discord.RichEmbed()
      .addField(`<:molecularYes:508290171507310631> Emoji Info ${args}`, `Full ID: **\\` + `${args}**
      Name: **${args.name}**
      ID: **${args.id}**
      Created at: **${moment.parseZone(args.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
      Animate check: **${anim[args.animated]}**`)
      .setColor("BLURPLE")
    message.channel.send(embed1);
  }

}
