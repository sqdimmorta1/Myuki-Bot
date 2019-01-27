const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
  if (!args[0]) return message.channel.send('Correct usage: **m^reverse (text to reverse)**');

  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))

  if (args[0] === sreverse) {

    sreverse = `${args.join(' ')}..Wait... You broke it!`

  }
  const reverseEmbed = new Discord.RichEmbed()
    .setColor("BLURPLE")
    .addField('<:molecularYes:508290171507310631> Reverse result', `\`\`\`css\n${sreverse}\`\`\``)
  message.channel.send({
    embed: reverseEmbed
  })

}
