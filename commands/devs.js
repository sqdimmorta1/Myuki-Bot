const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()
.setColor("BLURPLE")
.addField("<:molecularSettings:508290170962051074> Developers", `[Support Server](https://discord.gg/jgcBtja) | [Patreon](https://www.patreon.com/sqdimmorta1) | [Invite](https://discordapp.com/oauth2/authorize?client_id=498442154226745365&scope=bot&permissions=2146958847)
Code editor: **[Atom Editor 1.32.0](https://atom.io)**
Developer: **<@!294801596754165772>**
Co-developer: **<@295468625240915968>**`)
.setThumbnail("https://cdn.discordapp.com/avatars/498442154226745365/ec57906a45adb619b09e1c8226c524c4.png?size=2048")
.setFooter(`If you find error/bug in bot send error to sqdimmorta1#9999`);

             message.channel.send(embed);


}
