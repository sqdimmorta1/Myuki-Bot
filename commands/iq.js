const Discord = require('discord.js');
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, ops) => {

    if(message.mentions.members.size == 0) {
    const user = message.author;
    const member = message.guild.member(user);
    let iq = Math.round(Math.random() * 200);


    let embed1 = new Discord.RichEmbed()
    .setDescription(`<:myuki_iq:538994852357079042> **${message.author.username}'s iq is ${iq}!**`)
    .setColor("BLURPLE")

    return message.channel.send(embed1);
    }

        if(message.mentions.members.size == 1) {

          let memberToFind = message.mentions.members.first();
          let pickle = Math.round(Math.random() * 100);
              let iq = Math.round(Math.random() * 200);
          let embed = new Discord.RichEmbed()
          .setDescription(`<:myuki_iq:538994852357079042> **${memberToFind.user.tag}'s iq is ${iq}!**`)
          .setColor("BLURPLE")
          return message.channel.send(embed);
}

}
