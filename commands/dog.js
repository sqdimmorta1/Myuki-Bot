
const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {

  let rnsfw = [
    'https://media.giphy.com/media/o22WjU9bIgFWM/giphy.gif',
    'https://media1.tenor.com/images/e02effa807076d26d56bbd1be9c84d20/tenor.gif?itemid=5477435',
    'https://media.giphy.com/media/Vx4aJJEftCle8/giphy.gif',
    'https://media.giphy.com/media/t0eJIazBqnB5K/giphy.gif',
    'https://myfirstshiba.com/wp-content/uploads/2017/11/gif_test_kenji_cheeks.gif',
    'https://media1.tenor.com/images/997737496c5a403ff27beab9ddcf7492/tenor.gif?itemid=8182148',
    'https://66.media.tumblr.com/f3a7470e11f29c92cc21fa0fa3f2f835/tumblr_o2jy12W6KV1tvrxeoo1_400.gif',
    'https://blog.eat24.com/wp-content/uploads/2016/12/Dog-with-cracker-on-head.gif',
    'http://imgur.com/sAV1d5I.gif',
    'https://data.whicdn.com/images/303091205/original.gif',
    'https://media1.tenor.com/images/16ecd1b69eb29dd2e1bb23e6f49e4fa8/tenor.gif?itemid=3362316',
  ]

  const rnsfwc = rnsfw[Math.floor(Math.random() * rnsfw.length)]


    if(message.mentions.members.size == 0) {

    const user = message.author;
    const member = message.guild.member(user);

    let embed1 = new Discord.RichEmbed()
    .setTitle(`<a:myuki_load:508156791851319296> Puppy for you, ${message.author.username}`)
    .setDescription("So cuteeee")
    .setTimestamp()
    .setColor("RANDOM")
    .setImage(rnsfwc)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`);
      message.channel.send(embed1);
    return;
    }

}
