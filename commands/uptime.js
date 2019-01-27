const Discord = require("discord.js")

const {
  version
} = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
    const duration = moment.duration(bot.uptime).format(" D[d], H[h], m[m], s[s]");
    const dur = moment.duration(message.guild.createdAt).format(" D[d], H[h], m[m], s[s]");
    const embedStats = new Discord.RichEmbed()
      .addField("<:molecularReload:508290171293401098> Bot uptime", `**${duration}**`)
      .setColor("BLURPLE")
    message.channel.send(embedStats)
  });
};


exports.help = {
  name: "stats"
};
