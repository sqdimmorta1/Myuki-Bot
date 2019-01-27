const Discord = require('discord.js');
const encode = require('strict-uri-encode');

module.exports.run = async (bot, message, args, ops) => {
  let question = encode(args.join(' '));
  let link = `https://www.google.com/search?source=hp&ei=-BD0W-STDMeksAGAnbvABg&q=${question}&btnK=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA+%D0%B2+Google&oq=${question}&gs_l=psy-ab.3..0i131j0l2j0i131j0l6.2997.3450..4067...1.0..0.264.647.0j3j1......0....1..gws-wiz.....5..35i39.-b2Mbi8E6iM`;
  const embed = new Discord.RichEmbed()
    .addField(`<:myuki_google:514439792344170506> Web search`, `[Result (click me)](${link})`)
    .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png")
    .setColor("#4285f4");
  message.channel.send(embed);
}
