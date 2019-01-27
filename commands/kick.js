const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const botconfig = require("../botconfig.json");
const moment = require("moment");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {

  let kickChannel = message.guild.channels.find(`name`, "logs");
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return errors.cantfindUser(message.channel);
  let kReason = args.join(" ").slice(22);
  if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "MANAGE_MESSAGES");

  const logEmbed = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``I don't see #logs channel!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if(!kickChannel) return message.channel.send(logEmbed);

    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
        message.channel.send(meanEmbed)

      const meanEmbed = new Discord.RichEmbed()
      .setTitle("Invalid command entered, did you mean?")
      .setDescription("<:myuki_warning:508157875563134986> Error: ``Usage: $kick <user> <reason>``")
      .setTimestamp()
      .setColor("#170041");
      return;
    }

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("<:myuki_checkmark:508156238144471061> **Kick info**")
    .setColor("#170041")
    .addField("ﾠ", `Kicked user: **${kUser}**
    Kicked by: **<@${message.author.id}>**
    Kicked from: **${message.channel}**
    Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
    Reason: **${kReason}**`);

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

      const mutedembed = new Discord.RichEmbed()
      .setColor("#170041")
      .addField(`<:myuki_checkmark:508156238144471061> **Kick Info**`, `Kicked member: **<@${tomute.id}>**
        Kicked by: **${message.author}**
        Kicked from: **${message.channel}**
        Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
        Reason: **${reason}**`)

      message.channel.send(mutedembed)

        const mutaEmbed = new Discord.RichEmbed()
        .setColor("#170041")
        .addField(`<:myuki_checkmark:508156238144471061> **Kick Info**`, `You have been kicked from **${message.guild.name}**
          Kicked by: **${message.author.tag}**
          Kicked from: **${message.channel}**
          Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
          Reason: **${reason}**`)

        await kUser.send(mutaEmbed)
}

module.exports.help = {
  name:"kick"
}
