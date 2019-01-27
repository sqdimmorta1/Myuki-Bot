const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const ownerID = "294801596754165772";

let ops = {
  ownerID: ownerID
}

module.exports.run = async (bot, message, args) => {

  const no = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``This command is only for Owner!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if (!botconfig.owners.includes(message.author.id)) return message.channel.send(no);

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];

    } catch (e) {
        const epta = new Discord.RichEmbed()
        .setTitle("Seems like you're missing a required argument:")
        .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't specify the command for reload!``")
        .setTimestamp()
        .setColor("BLURPLE");
        return message.channel.send(epta);
    }

    const epta = new Discord.RichEmbed()
    .addField(`<a:myuki_loading:515399260414410752> Reload`, `**${args[0]}.js** command was reloaded`)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)
    .setTimestamp()
    .setColor("BLURPLE");

    message.channel.send(epta);
    message.react("515399260414410752");
}
