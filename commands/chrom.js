const Discord = require('discord.js');
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, ops) => {

    if(message.mentions.members.size == 0) {
    const user = message.author;
    const member = message.guild.member(user);

    let rchrom = [
      '46 chromosomes, you - human',
      '47 chromosomes, you - autist',
      '48 chromosomes, you - potato',
      '39 chromosomes, you - parrot',
      '228 chromosomes, you - Immortal',
      '54 chromosomes, you - sheep',
      '80 chromosomes, you - duck',
      '78 chromosomes, you - dog',
      '38 chromosomes, you - cat',
      '40 chromosomes, you - pig',
      '44 chromosomes, you - rabbit',
      '64 chromosomes, you - horse',
      '1337 chromosomes, you - Cocucon',
    ]

    const rchromc = rchrom[Math.floor(Math.random() * rchrom.length)]

    let embed1 = new Discord.RichEmbed()
    .setDescription(`<:myuki_chromosome:538996631656202240> **${message.author.username} have ${rchromc}!**`)
    .setColor("BLURPLE")

    return message.channel.send(embed1);
    }

        if(message.mentions.members.size == 1) {

          let rchrom = [
            '46 chromosomes, he - human',
            '47 chromosomes, he - autist',
            '48 chromosomes, he - potato',
            '39 chromosomes, he - parrot',
            '228 chromosomes, he - Immortal',
            '54 chromosomes, he - sheep',
            '80 chromosomes, he - duck',
            '78 chromosomes, he - dog',
            '38 chromosomes, he - cat',
            '40 chromosomes, he - pig',
            '44 chromosomes, he - rabbit',
            '64 chromosomes, he - horse',
            '1337 chromosomes, you - Cocucon',
          ]

          const rchromc = rchrom[Math.floor(Math.random() * rchrom.length)]

          let memberToFind = message.mentions.members.first();

          let embed = new Discord.RichEmbed()
          .setDescription(`<:myuki_chromosome:538996631656202240> **${memberToFind.user.tag} have ${rchromc}!**`)
          .setColor("BLURPLE")
          return message.channel.send(embed);
}

}
