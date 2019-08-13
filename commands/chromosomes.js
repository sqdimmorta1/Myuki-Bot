const Discord = require('discord.js');
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, ops) => {

    if(message.mentions.members.size == 0) {
    const user = message.author;
    const member = message.guild.member(user);

    let rchrom = [
      '46 хромосом, ты - человек',
      '47 хромосом, ты - аутист',
      '48 хромосом, ты - картофель',
      '39 хромосом, ты - попугай',
      '228 хромосом, ты Immortal',
      '54 хромосом, ты - овца',
      '80 хромосом, ты - утка',
      '78 хромосом, ты собачка :3',
      '38 хромосом, ты - котик :3',
      '40 хромосом, ты - кабан (без рофлов)',
      '44 хромосомы, ты - кролик',
      '64 хромосомы, ты - лошадь',
      '1337 хромосом, ты - Liryz',
    ]

    const rchromc = rchrom[Math.floor(Math.random() * rchrom.length)]

    let embed1 = new Discord.RichEmbed()
    .setDescription(`<:myuki_chromosome:538996631656202240> **${message.author.username} имеет ${rchromc}!**`)

    return message.channel.send(embed1);
    }

        if(message.mentions.members.size == 1) {

          let rchrom = [
            '46 хромосом, он - человек',
            '47 хромосом, он - аутист',
            '48 хромосом, он - картофель',
            '39 хромосом, он - попугай',
            '228 хромосом, он Immortal',
            '54 хромосом, он - овца',
            '80 хромосом, он - утка',
            '78 хромосом, он собачка :3',
            '38 хромосом, он - котик :3',
            '40 хромосом, он - кабан (без рофлов)',
            '44 хромосомы, он - кролик',
            '64 хромосомы, он - лошадь',
            '1337 хромосом, он - Liryz',
          ]

          const rchromc = rchrom[Math.floor(Math.random() * rchrom.length)]

          let memberToFind = message.mentions.members.first();

          let embed = new Discord.RichEmbed()
          .setDescription(`<:myuki_chromosome:538996631656202240> **${memberToFind.user.tag} имеет ${rchromc}!**`)
          .setColor("BLURPLE")
          return message.channel.send(embed);
}

}
