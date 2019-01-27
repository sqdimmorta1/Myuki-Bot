const Discord = require('discord.js');
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, ops) => {

    if(message.mentions.members.size == 0) {

      let superpickle = Math.round(Math.random() * 10000);

      const ownerPickle = new Discord.RichEmbed()
      .setDescription(`:cucumber: **I think ${message.author.username}'s pickle is ${superpickle}cm!**`)
      if (botconfig.owners.includes(message.author.id)) return message.channel.send(ownerPickle);

    const user = message.author;
    const member = message.guild.member(user);
    let pickle = Math.round(Math.random() * 45);

    let embed1 = new Discord.RichEmbed()
    .setDescription(`:cucumber: **I think ${message.author.username}'s pickle is ${pickle}cm!**`)

    return message.channel.send(embed1);
    }

        if(message.mentions.members.size == 1) {

          let memberToFind = message.mentions.members.first();
          let pickle = Math.round(Math.random() * 45);

          let embed = new Discord.RichEmbed()
          .setDescription(`<a:GWpepelandPepeplant:512637182314414110> **I think ${memberToFind.user.tag}'s pickle is ${pickle}cm!**`)
          return message.channel.send(embed);
}

}
