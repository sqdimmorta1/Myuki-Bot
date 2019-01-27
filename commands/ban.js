const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const botconfig = require("../botconfig.json");
const moment = require("moment");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {

  let incidentchannel = message.guild.channels.find(`name`, "logs");
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return errors.cantfindUser(message.channel);
  if(bUser.id === bot.user.id) return errors.botuser(message);
  let bReason = args.join(" ").slice(22);
  if(!bReason) return errors.noReason(message.channel);
  if(!bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES")

  const logEmbed = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``I don't see #logs channel!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if(!incidentchannel) return message.channel.send(logEmbed);

    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
        message.channel.send(meanEmbed)
      const meanEmbed = new Discord.RichEmbed()
      .setTitle("Invalid command entered, did you mean?")
      .setDescription("<:molecularLocked:508290171452653581> Error: ``Usage: $ban <user> <reason>``")
      .setTimestamp()
      .setColor("BLURPLE");
      return;
    }

    let banEmbed = new Discord.RichEmbed()
    .setDescription("<:molecularBan:508290171809038356> **Ban info**")
    .setColor("BLURPLE")
    .addField("ﾠ", `Banned user: **${bUser}**
    Banned by: **<@${message.author.id}>**
    Banned in: **${message.channel}**
    Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')} PM**
    Reason: **${bReason}**`);

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
