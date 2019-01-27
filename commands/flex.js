const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {

  let rflex = [
    'https://thumbs.gfycat.com/ValidSecretDuckbillplatypus-max-1mb.gif',
    'https://i.makeagif.com/media/2-11-2018/Eomr_S.gif',
    'https://thumbs.gfycat.com/AjarScratchyKoala-size_restricted.gif',
    'https://thumbs.gfycat.com/FoolishContentAmericanwigeon-max-1mb.gif',
  ]

  const rflexc = rflex[Math.floor(Math.random() * rflex.length)]


    if(message.mentions.members.size == 0) {

    const user = message.author;
    const member = message.guild.member(user);

    let embed1 = new Discord.RichEmbed()
    .setTitle(`<a:pp:508177443463626772> You flex!`)
    .setDescription(`lul`)
    .setImage(rflexc)
    .setTimestamp()
      message.channel.send(embed1);
    return;
    }

    let rflexh = [
      'https://media.giphy.com/media/SJW6gSuMpvE6bvHK3X/giphy.gif',
      'https://media1.tenor.com/images/b7660c52a66d6a21c103b83381e919df/tenor.gif?itemid=10024589',
      'https://media1.tenor.com/images/c3323ba24844a258fe2cc9427d4cc88c/tenor.gif?itemid=10024566',
      'https://media1.tenor.com/images/e1b4b9300e1bc8d84dcb4a27ab320b2b/tenor.gif?itemid=10024593',
    ]

    const rflexhc = rflexh[Math.floor(Math.random() * rflexh.length)]
        if(message.mentions.members.size == 1) {



          let memberToFind = message.mentions.members.first();


          let embed = new Discord.RichEmbed()
          .setTitle(`<a:pp_reverse:508177536820183040> You flex with ${memberToFind.user.tag}!`)
          .setDescription(`lul`)
          .setImage(rflexhc)
          .setTimestamp()
          .setColor("RANDOM")
          message.channel.send(embed);
return;
}

}
