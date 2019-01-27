const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let id = args[0];

  const invalidEmbed = new Discord.RichEmbed()

  .setTitle("Seems like you're missing a required argument:")
  .setDescription(`<:molecularLocked:508290171452653581> Error: \`\`You enter invalid client ID!\`\``)
  .setTimestamp()
  .setColor("BLURPLE");

  if (!id || id.length > 18 || id.length < 18 || isNaN(id)) return message.channel.send(invalidEmbed);
  if (args[0]) {

    bot.fetchUser(id).then(u => {

      const notbotEmbed = new Discord.RichEmbed()

      .setTitle("Seems like you're missing a required argument:")
      .setDescription(`<:molecularLocked:508290171452653581> Error: \`\`${u.tag} isn't a bot!\`\``)
      .setTimestamp()
      .setColor("BLURPLE");

      if (!u.bot) return message.channel.send(notbotEmbed);
      else {
        const invEmbed = new Discord.RichEmbed()
        .addField(`:link: Invite link`, `[invite with admin perms](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847)
        Discord tag: **${u.tag}**
        Client ID: **${id}**`)
          .setTimestamp()
          .setThumbnail(u.displayAvatarURL)
          .setColor("BLURPLE")

        message.channel.send(invEmbed)
      }

    }).catch(err => message.channel.send(new Discord.RichEmbed().setTitle(`Seems like you're missing a required argument:`).setColor("#170041").setTimestamp().setDescription(`<:myuki_warning:508157875563134986> Error: \`\`${(err)}\`\``)));

  }
};
