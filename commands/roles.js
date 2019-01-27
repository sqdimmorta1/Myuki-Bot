const Discord = require("discord.js");
const moment = require("moment");
const botconfig = require("../botconfig.json");
module.exports.run = async (bot, message, args) => {

  try {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setAuthor(message.guild.name)
      .setColor("BLURPLE")
      .setThumbnail(sicon)
      .setTitle(`<:molecularUser:508290171121303556> Roles[${message.guild.roles.size}]`)
      .setDescription(`${message.guild.roles.map(r => `<@&${r.id}>`).slice(1).join(",  ")}`)

    message.channel.send(serverembed);

  } catch (err) {
    const embed = new Discord.RichEmbed()

    .setTitle("Seems like you're missing a required argument:")
    .setDescription(`<:molecularLocked:508290171452653581> Error: \`\`${(err)}\`\``)
    .setTimestamp()
    .setColor("BLURPLE");

    message.channel.send({
      embed
    });
  }
}
