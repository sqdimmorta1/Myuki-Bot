const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()
.setColor("ff2121")
.setDescription("sqdimmorta1 любит showerymoon:two_hearts:")
.setTitle("Любовь")
.setThumbnail("http://pluspng.com/img-png/pink-love-heart-png-hd-pink-heart-png-pic-3000.png")
.setFooter(`Top love`)
.setTimestamp()

             message.channel.send(embed);


}
