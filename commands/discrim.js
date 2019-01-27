const Discord = require('discord.js');

exports.run = (bot, message, args, tools) => {

  const embed = new Discord.RichEmbed()
    .setColor("BLURPLE");

  if (isNaN(args[0]) || args[0] > 9999 || args[0] < 1) {

    embed.setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``You enter invalid discriminator!``")
    .setTimestamp()
    .setColor("BLURPLE");

    return message.channel.send(embed);

  }

  let resp = '';

  bot.users.map(function(user) {

    if (user.discriminator == args[0]) return resp += `${user.tag}\n`;
    else return;

  })

  embed.setTitle(`<:molecularChannel:508290171473756160>Discriminator: ${args[0]}`)
    .setDescription(resp);

  message.channel.send(embed)

}
