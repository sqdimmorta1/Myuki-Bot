const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");
  //!tempmute @user 1s/m/h/d

  module.exports.run = async (bot, message, args) => {

    const logeeEmbed = new Discord.RichEmbed()

    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:myuki_warning:508157875563134986> Error: ``You don't have permissions to MANAGE_MESSAGES``")
    .setTimestamp()
    .setColor("#170041");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(logeeEmbed);

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const logeEmbed = new Discord.RichEmbed()

    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``I cant't find user!``")
    .setTimestamp()
    .setColor("BLU");
    if(!tomute) message.channel.send(logeEmbed);

    const logeeeEmbed = new Discord.RichEmbed()

    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:myuki_warning:508157875563134986> Error: ``I can't unmute them!``")
    .setTimestamp()
    .setColor("#170041");

    if(tomute.hasPermission("MANAGE_MESSAGES")) message.channel.send(logeeeEmbed);

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role

    let muteembed = new Discord.RichEmbed()
    .setDescription("<:myuki_checkmark:508156238144471061> **Unmute info**")
    .setColor("#170041")
    .addField(`ﾠ`, `Unmuted user: **${tomute}**
      Unmuted in: **${message.channel}**
      Moderator: **${message.author}**
      Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**`)

    let incidentschannel = message.guild.channels.find(`name`, "logs");

        const logEmbed = new Discord.RichEmbed()
        .setTitle("Seems like you're missing a required argument:")
        .setDescription("<:myuki_warning:508157875563134986> Error: ``I don't see #logs channel!``")
        .setTimestamp()
        .setColor("#170041");

    if(!incidentschannel) message.channel.send(logEmbed);

    incidentschannel.send(muteembed);

    await(tomute.removeRole(muterole.id));

    const unmuteEmbed = new Discord.RichEmbed()

    .setColor("#170041")
    .addField("<:myuki_checkmark:508156238144471061> **Unmute info**", `Unmuted: **<@${tomute.id}>**
      Unmuted by: **${message.author}**
      Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**`)

message.channel.send(unmuteEmbed);

      const mutaEmbed = new Discord.RichEmbed()
      .setColor("#170041")
      .addField(`<:myuki_checkmark:508156238144471061> **Unmute Info**`, `You have been unmuted in **${message.guild.name}**
        Unmuted by: **${message.author}**
        Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**`)

      await tomute.send(mutaEmbed)
  //end of module
  }
