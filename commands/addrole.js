const Discord = require("discord.js");
const moment = require("moment");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {

    const meanEmbed = new Discord.RichEmbed()
      .setTitle("Invalid command entered, did you mean?")
      .setDescription("<:molecularLocked:508290171452653581> Error: ``Usage: $addrole <user> <role>``")
      .setTimestamp()
      .setColor("BLURPLE");

    message.channel.send(meanEmbed);
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);

  const specEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't specify a role!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if (!role) return message.channel.send(specEmbed);
  let gRole = message.guild.roles.find(`name`, role);

  const roleeEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``I can't find that role!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if (!gRole) return message.channel.send(roleeEmbed);

  const haveEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``That user already have that role!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if (rMember.roles.has(gRole.id)) return message.channel.send(haveEmbed);
  await (rMember.addRole(gRole.id));

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

    const newroleEEmbed = new Discord.RichEmbed()

    .setColor("BLURPLE")
    .addField(`<:molecularYes:508290171507310631> **AddRole Info**`, `Given role: **${rMember}**
      Given by: **${message.author}**
      Role: **${gRole.name}**
      Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**`)

    message.channel.send(newroleEEmbed)

    const newroleembed = new Discord.RichEmbed()

    .setColor("BLURPLE")
    .addField(`<:molecularYes:508290171507310631> **AddRole Info**`, `You have new role in **${message.guild.name}**!
      Given by: **${message.author}**
      Role: **${gRole.name}**
      Time: **${moment.parseZone(message.author.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**`)

      await rMember.send(newroleembed)
  }
}
