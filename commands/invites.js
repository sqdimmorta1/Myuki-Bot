const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()
.setColor("BLURPLE")
.setTitle(":incoming_envelope: How to invite me?")
.setDescription(`With admin perms [Invite](https://discordapp.com/oauth2/authorize?client_id=498442154226745365&scope=bot&permissions=2146958847)
Without admin perms [Invite](https://discordapp.com/oauth2/authorize?client_id=498442154226745365&scope=bot&permissions=37080128)`)
.setTimestamp()
.setFooter(`If you find error/bug in bot send error to Immorta1 | Myuki#1149`)

             message.channel.send(embed);


}
