const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../botconfig.json");
const moment = require("moment");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
module.exports.run = async (bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let incidentschannel = message.guild.channels.find(`name`, "logs");
  let reason = args.slice(2).join(" ");
  let muterole = message.guild.roles.find(`name`, "muted");
  let mutetime = args[1];

  const permsEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't have permissions to manage messages!``")
  .setTimestamp()
  .setColor("BLURPLE");

if(!message.member.hasPermission("MANAGE_MESSAGES"))
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(permsEmbed)

  const muteembed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .addField(`<:molecularMute:508290171452653578> **Mute info**`, `Muted user: **${tomute}**
    Muted in: **${message.channel}**
    Moderator: **${message.author}**
    Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
    Length: **${mutetime}**
    Reason: **${reason}**`)



  const logsEmbed = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``I can't see #logs channel!``")
  .setTimestamp()
  .setColor("BLURPLE");


  if(!incidentschannel) message.channel.send(logsEmbed)
  incidentschannel.send(muteembed);

  if(args[0] == "help"){

  const meanEmbed = new Discord.RichEmbed()
    .setTitle("Invalid command entered, did you mean?")
    .setDescription(`<:molecularLocked:508290171452653581> Error: \`\`Usage: ${botconfig.prefix}mute <user> <time> <reason>\`\``)
    .setTimestamp()
    .setColor("BLURPLE");

    message.channel.send(meanEmbed)
    return;
  }

  const playerEmbed = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``I can't find user!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if(!tomute) message.channel.send(playerEmbed)

  const punishEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``I can't punish him!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if(tomute.hasPermission("MANAGE_MESSAGES")) message.channel.send(punishEmbed)

  const reasonEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't specify the reason!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if(!reason) return message.channel.send(reasonEmbed)

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

  const timerEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't specify the time!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if(!mutetime) message.channel.send(timerEmbed)

  message.delete().catch(O_o=>{});

  try{

    const lsEmbed = new Discord.RichEmbed()

    .setColor(red)
    .setTitle("You has been muted in" `${message.guild.name}`)
    .addField("For", `${mutetime}`)
    .addField("By", `${message.author}`)
    .setTimestamp()
    .setFooter(`Sorry!`)

    await tomute.send(lsEmbed)
  }catch(e){
    message.channel.send(`<:molecularYes:508290171507310631><@${tomute.id}> has been muted.`)

      const mutaEmbed = new Discord.RichEmbed()
      .setColor("BLURPLE")
      .addField(`<:molecularMute:508290171452653578> **Mute Info**`, `You have been muted in **${message.guild.name}**
        Muted by: **${message.author.tag}**
        Length: **${mutetime}**
        Reason: **${reason}**`)

      await tomute.send(mutaEmbed)
  }


  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);

    const unmuteembed = new Discord.RichEmbed()

    message.channel.send(`<:molecularYes:508290171507310631><@${tomute.id}> has been unmuted.`);

  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
