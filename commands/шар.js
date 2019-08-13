const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {

  let rball = [
    'https://cdn.discordapp.com/attachments/481044723549601796/610741126248529920/081c86ca3228834d.png',
    'https://cdn.discordapp.com/attachments/481044723549601796/610741112025382922/bc94b5787e840183.png',
    'https://cdn.discordapp.com/attachments/481044723549601796/610741096686944277/bcf431eb5fa914ae.png',
    'https://cdn.discordapp.com/attachments/481044723549601796/610741032354578442/a2b50c43c5502cc1.png',
    'https://cdn.discordapp.com/attachments/481044723549601796/610741083009318912/d9e4e6e6ecad7328.png',
    'https://cdn.discordapp.com/attachments/481044723549601796/610741064176893972/aabfa03017cf0a9f.png',
    'https://cdn.discordapp.com/attachments/481044723549601796/610741046573531158/3d7ffe892df4af3e.png',
    'https://cdn.discordapp.com/attachments/481044723549601796/610741160545222656/18a88501d65bb97b.png',
    'https://cdn.discordapp.com/attachments/481044723549601796/610741145621889073/b05ad1fa78756ad5.png', 
  ]

  const rballc = rball[Math.floor(Math.random() * rball.length)]


    if(message.mentions.members.size == 0) {

    const user = message.author;
    const member = message.guild.member(user);

    let embed1 = new Discord.RichEmbed()
    .setDescription(`Магический шар!`)
    .setImage(rballc)
    .setTimestamp()
      message.channel.send(embed1);
    return;
    }

    let rballh = [
      'https://cdn.discordapp.com/attachments/481044723549601796/610741126248529920/081c86ca3228834d.png',
      'https://cdn.discordapp.com/attachments/481044723549601796/610741112025382922/bc94b5787e840183.png',
      'https://cdn.discordapp.com/attachments/481044723549601796/610741096686944277/bcf431eb5fa914ae.png',
      'https://cdn.discordapp.com/attachments/481044723549601796/610741032354578442/a2b50c43c5502cc1.png',
      'https://cdn.discordapp.com/attachments/481044723549601796/610741083009318912/d9e4e6e6ecad7328.png',
      'https://cdn.discordapp.com/attachments/481044723549601796/610741064176893972/aabfa03017cf0a9f.png',
      'https://cdn.discordapp.com/attachments/481044723549601796/610741046573531158/3d7ffe892df4af3e.png',
      'https://cdn.discordapp.com/attachments/481044723549601796/610741160545222656/18a88501d65bb97b.png',
      'https://cdn.discordapp.com/attachments/481044723549601796/610741145621889073/b05ad1fa78756ad5.png', 
    ]

    const rballhc = rballh[Math.floor(Math.random() * rballh.length)]
        if(message.mentions.members.size == 1) {



          let memberToFind = message.mentions.members.first();


          let embed = new Discord.RichEmbed()
          .setDescription(`Магический шар!`)
          .setImage(rballhc)
          .setTimestamp()
          message.channel.send(embed);
return;
}

}
