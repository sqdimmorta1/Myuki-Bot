const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const errors = require("../utils/errors.js");
const moment = require("moment");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {

    let reportschannel = message.guild.channels.find(`name`, "😡жалобы");
    let rreason = args[1];
    if(!rreason) return errors.noReason(message.channel);

    const logEmbed = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``Я не вижу #😡жалобы канал!``")
    .setTimestamp()
    .setColor("BLURPLE");

    if(!reportschannel) return message.channel.send(logEmbed);

    message.delete();
    if(args[0] == "help"){
        message.channel.send(meanEmbed)
      const meanEmbed = new Discord.RichEmbed()
      .setTitle("Простите, но вы некорректно ввели команду")
      .setDescription("<:molecularLocked:508290171452653581> Ошибка: ``Используй: $watchdog <user> <reason>``")
      .setTimestamp()
      .setColor("BLURPLE");
      return;
    }

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("**Watchdog report**")
    .setColor("BLURPLE")
    .addField("ﾠ", `<:myuki_suspect:510105085217603605> Подозреваемый: **${args[0]}**
    Зарепортил: **${message.author}**
    Время: **${moment.parseZone(message.author.createdAt).locale('ru').format('LLLL DD/MM/YYYY, HH:mm')}**
    Причина: **${rreason}**`)
    .setThumbnail("https://png2.kisspng.com/20180625/ekb/kisspng-discord-twitch-emoji-clip-art-5b3097e93601e2.9653295015299112732212.png");

    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
