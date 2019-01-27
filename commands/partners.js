const Discord = require('discord.js');

module.exports.run = async (bot, message, args, ops) => {
  let partner1 = bot.users.find(u => u.id === `490609897176563735`)
  const embed = new Discord.RichEmbed()
    .addField(`<:molecularBug:508290170790084611> Partners`, `${partner1.tag} - [Invite link with default perms](https://discordapp.com/oauth2/authorize?client_id=490609897176563735&scope=bot&permissions=37080128)
    Website Molecular - [Link](https://molecular.glitch.me/main/)`)
    .setThumbnail(`https://cdn.discordapp.com/avatars/490609897176563735/5a79e4c94981162cf7e4c0cec2290322.png?size=2048`)
    .setColor("BLURPLE");
  message.channel.send(embed);
}
