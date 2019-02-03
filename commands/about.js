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
    const embedStats = new Discord.RichEmbed()
      .addField(":bar_chart: Myuki statistics", "[Support Server](https://discord.gg/jgcBtja) | [Patreon](https://www.patreon.com/sqdimmorta1) | [Invite](https://discordapp.com/oauth2/authorize?client_id=498442154226745365&scope=bot&permissions=2146958847)")
      .setColor("BLURPLE")
      .addField("ﾠ", `<:molecularSettings:508290170962051074> Version: **9.0.0**
      <:molecularLeave:508290171297595402> Uptime: **${duration}**
      <:molecularNewGroup:508290171310178324> Watchs: **${bot.guilds.size.toLocaleString()} guilds**
      <a:myuki_loading:515399260414410752> Latency: **${Math.round(bot.ping)}ms**
      <:molecularUser:508290171121303556> Streams: **with ${bot.users.size.toLocaleString()} members**
      <:molecularSend:508290171465105438> Created: **${moment.parseZone(bot.user.createdAt).locale('en').format('DD/MM/YYYY, HH:mm')}**
      <:myuki_ram:508334068610498560> Ram: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB**
      <:myuki_cpu:509215750469189637> CPU usage: **${percent.toFixed(2)}%**
      \`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
      .setThumbnail(`https://cdn.discordapp.com/avatars/498442154226745365/ec57906a45adb619b09e1c8226c524c4.png?size=2048`)
    message.channel.send(embedStats)
  });
};


exports.help = {
  name: "stats"
};
