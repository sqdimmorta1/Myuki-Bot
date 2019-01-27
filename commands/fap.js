const Discord = require('discord.js');
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, ops) => {

    if(message.mentions.members.size == 0) {
    const user = message.author;
    const member = message.guild.member(user);
    let pickle = Math.round(Math.random() * 100);

    const nonsfw = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``It's not NSFW channel!``")
    .setTimestamp()
    .setColor("BLURPLE");

    if (!message.channel.nsfw) return message.channel.send(nonsfw)

    let embed1 = new Discord.RichEmbed()
    .setDescription(`**${message.author.username} надрочил себе на ${pickle}%!**`)

    return message.channel.send(embed1);
    }

        if(message.mentions.members.size == 1) {

          let memberToFind = message.mentions.members.first();
          let pickle = Math.round(Math.random() * 100);

          let embed = new Discord.RichEmbed()
          .setDescription(`<a:PEPESTANbanannet:512736530985385984> **${message.author.username}#${message.author.discriminator} надрочил(а) ${memberToFind.user.tag} на ${pickle}%!**`)
          return message.channel.send(embed);
}

}
