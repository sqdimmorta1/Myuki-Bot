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

module.exports.run = async (bot, message, args, ops) => {
  const no = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``This command is only for Owner!``")
  .setTimestamp()
  .setColor("BLURPLE");
  if (!botconfig.owners.includes(message.author.id)) return message.channel.send(no);
  const code = args.join(" ")
  try {
    let output = eval(code);
    if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
    output = inspect(output, {
      depth: 0,
      maxArrayLength: null
    });

    output = clean(output);
    if (output.length < 1950) {
      //Отправляет пользователю данные эмуляции.

      const emeebed = new Discord.RichEmbed()
        .setTitle(`Evaluation <:molecularYes:508290171507310631>`)
        .setColor("BLURPLE")
        .setDescription(`Output: \`\`\`js\n${output}\n\`\`\``)
        .setFooter(`Evaluated using JavaScript 11.4.2`, `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png`)

      message.author.send(emeebed);
      //Ставит реакцию (выполнено).
      message.react("508290171507310631")
    } else {
      message.author.send(`${output}`, {
        split: "\n",
        code: "js"
      });
    }
  } catch (error) {
    //Захватывает ошибку и говорит об этом.
    const emebed = new Discord.RichEmbed()
      .setTitle(`Evaluation <:molecularNo:508290171633139713>`)
      .setColor("BLURPLE")
      .setDescription(`Error \`\`\`js\n${error}\`\`\``)
      .setFooter(`Evaluated using JavaScript 11.4.2`, `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png`)

    message.channel.send(emebed);
    message.react("508290171633139713")
  }

  function clean(text) {
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  }

}
