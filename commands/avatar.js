const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {




    if(message.mentions.members.size == 0) {

    const user = message.author;
    const member = message.guild.member(user);

    let embed1 = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setTitle(`<:molecularSend:508290171465105438> Avatar`)
    .setImage(message.author.avatarURL)
    .setTimestamp()
      message.channel.send(embed1);
    return;
    }

        if(message.mentions.members.size == 1) {

          let memberToFind = message.mentions.members.first();


          let embed = new Discord.RichEmbed()
        .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL)
        .setTitle(`<:molecularSend:508290171465105438> Avatar`)
        .setImage(memberToFind.user.avatarURL)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)
          message.channel.send(embed);
return;
}

}
