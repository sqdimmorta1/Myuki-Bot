
const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {

  let rslap = [
    'https://steamusercontent-a.akamaihd.net/ugc/919172593203321601/640D1F3E9B319201192724BDF0A23E929941E084/',
    'https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif',
    'https://thumbs.gfycat.com/CaringFloweryKentrosaurus-size_restricted.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj0K1rKfOZr0QJvlA0zWkD9CYQAEaeLxiZyXUN53_1mCxW3tN',
  ]

  const rslapc = rslap[Math.floor(Math.random() * rslap.length)]


    if(message.mentions.members.size == 0) {

    const user = message.author;
    const member = message.guild.member(user);

    let embed1 = new Discord.RichEmbed()
    .setTitle("Invalid command entered, did you mean?")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``Usage: $slap <user>``")
    .setTimestamp()
    .setColor("BLURPLE");
      message.channel.send(embed1);
    return;
    }

        if(message.mentions.members.size == 1) {



          let memberToFind = message.mentions.members.first();


          let embed = new Discord.RichEmbed()
          .setTitle(`You slaped ${memberToFind.user.tag}!`)
          .setDescription(`Oof!`)
          .setImage(rslapc)
          .setTimestamp()
          message.channel.send(embed);
return;
}

}
