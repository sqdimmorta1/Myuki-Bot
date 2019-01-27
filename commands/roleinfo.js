const {
  RichEmbed
} = require('discord.js');

exports.run = (bot, message, args) => {

  const bit = {
    true: "Yes",
    false: "Nope"
  };
  // Tries to get the first mentioned role or a role ID or a role name (role names are case sensitive)
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

  // If we can't find any role, then just default to the author's highest role
  if (!role) role = message.member.highestRole;


  // Define our embed
  const embed = new RichEmbed()
    .setColor(role.hexColor)
    .addField(`<:molecularUser:508290171121303556> Role Info`, `Role: **${role.name}**
      Color code: **${role.hexColor}**
      Editable: **${bit[role.editable.toString()]}**
      Created at: **${role.createdAt.toDateString()}**
      Managed: **${bit[role.managed.toString()]}**
      Members: **${role.members.size}**`)
    .setFooter(`ID: ${role.id}`);
  return message.channel.send({
    embed: embed
  });
};
