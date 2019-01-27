
const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {

    if(message.mentions.members.size == 0) {

    const user = message.author;
    const member = message.guild.member(user);

    let embed1 = new Discord.RichEmbed()
    .setTitle("Invalid command entered, did you mean?")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``Usage: $fakeban <user>``")
    .setTimestamp()
    .setColor("BLURPLE");
      message.channel.send(embed1);
    return;
    }

        if(message.mentions.members.size == 1) {



          let memberToFind = message.mentions.members.first();


          let embed = new Discord.RichEmbed()
          .setTitle(`:tada: You banned ${memberToFind.user.tag}!`)
          .setDescription(`Oof!`)
          .setImage("https://i.imgur.com/lYDmo1w.gif?noredirect")
          .setTimestamp()
          message.channel.send(embed);
return;
}

}
