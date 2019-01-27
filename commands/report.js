const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const errors = require("../utils/errors.js");
const moment = require("moment");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {

    let reportschannel = message.guild.channels.find(`name`, "reports");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    const logEmbed = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``There isn't #reports channel``")
    .setTimestamp()
    .setColor("BLURPLE");

    if(!reportschannel) return message.channel.send(logEmbed);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("<:molecularDeleteUser:508290171024703509> **Report info**")
    .setColor("BLURPLE")
    .addField("ﾠ", `Suspect: **${rUser}**
    Reported by: **${message.author}**
    Channel: **${message.channel}**
    Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
    Reason: **${rreason}**`);

    reportschannel.send(reportEmbed);

    message.delete();
    if(args[0] !== "help"){
        message.channel.send(meanEmbed)
      const meanEmbed = new Discord.RichEmbed()
      .setTitle("Invalid command entered, did you mean?")
      .setDescription(`<:molecularLocked:508290171452653581> Error: ``Usage: ${botconfig.prefix}report <user> <reason>```)
      .setTimestamp()
      .setColor("BLURPLE");
      return;
    }

}

module.exports.help = {
  name: "report"
}
