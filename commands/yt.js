const Discord = require('discord.js');
const encode = require('strict-uri-encode');

module.exports.run = async (bot, message, args, ops) => {
  let question = encode(args.join(' '));
  let link = `https://www.youtube.com/results?search_query=${question}`;
  const embed = new Discord.RichEmbed()
    .addField(`<:myuki_youtube:514439782877757446> YouTube search`, `[Result (click me)](${link})`)
    .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png")
    .setColor("ff0000")
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`);
  message.channel.send(embed);
}
