const math = require('mathjs');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args, tools) => {

  const perms1Embed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't input a calulation!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if (!args[0]) return message.channel.send(perms1Embed);

  let resp;
  try {
    resp = math.eval(args.join(" "));
  } catch (e) {

    const permsEmbed = new Discord.RichEmbed()

    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't input valid calulation!``")
    .setTimestamp()
    .setColor("BLURPLE");

    message.channel.send(permsEmbed);
    return;
  }

  const embed = new Discord.RichEmbed()
    .setColor("BLURPLE")
    .setTitle('<:myuki_calculator:509367522559131668> Calculator')
    .setDescription(`[Support Server](https://discord.gg/jgcBtja) | [Patreon](https://www.patreon.com/sqdimmorta1) | [Invite](https://discordapp.com/oauth2/authorize?client_id=498442154226745365&scope=bot&permissions=2146958847)
      \`\`\`js\n${resp}\`\`\``)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`);
  message.channel.send(embed);
}
