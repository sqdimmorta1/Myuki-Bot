const {
  inspect
} = require("util");
const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const ms = require("ms");
const moment = require("moment");
const ta = require("time-ago");
const dateformat = require("dateformat");
const encode = require('strict-uri-encode');
const ascii = require('ascii-art');
const math = require('mathjs');
const snekfetch = require('snekfetch');
const cowsay = require('cowsay');
const errors = require("../utils/errors.js");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
module.exports.run = async (bot, message, args) => {
  const text = args.join(" ")
  let reportschannel = message.guild.channels.find(`name`, "🌐отчёты");
  let rhex = [
    '#00e08d',
    '#00b6e0',
    '#0077e0',
    'BLURPLE'
  ]

  const rhexc = rhex[Math.floor(Math.random() * rhex.length)]

  const logEmbed = new Discord.RichEmbed()
  .setTitle("Похоже, что вам не хватает требуемого аргумента")
  .setDescription("<:molecularLocked:508290171452653581> Аргумент: ``Я не вижу текстовый канал #🌐отчёты!``")
  .setTimestamp()
  .setColor("BLURPLE");

  if(!reportschannel) return message.channel.send(logEmbed);


    message.delete();
    if(args[0] == "help"){
        message.channel.send(meanEmbed)
      const meanEmbed = new Discord.RichEmbed()
      .setTitle("Простите, но вы некорректно ввели команду")
      .setDescription("<:molecularLocked:508290171452653581> Ошибка: ``Используй: $game <ник тренера> <сервер, итог игры>``")
      .setTimestamp()
      .setColor("BLURPLE");
      return;
    }

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("**<:myuki_games:510438955603329024> Отчёт общей игры**")
    .setColor(rhexc)
    .addField("ﾠ", `<:myuki_trainer:510435872475447297> Тренер: **${message.author}**
    Итог: \`\`\`${text}\`\`\``)
    .setThumbnail("https://i.imgur.com/hGnIXHb.png")
    .setTimestamp();

    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
