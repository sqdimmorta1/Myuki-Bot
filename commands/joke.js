const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {

  let rnsfw = [
    'Where do polar bears keep their money? In a snow bank!',
    'Why did the dinosaur cross the road? Because chickens didn’t exist yet!',
    'How do vampires start their letters? “Tomb it may concern…”',
    'Why was the broom late for school? It overswept!',
    'What did one pickle say to the other pickle who wouldn’t stop complaining? “Dill with it.”',
    'Which side of a duck has the most feathers? The outside.',
    'Where do Volkswagens go when they get old? The old Volks home.',
    'What do you call someone who plays tricks on Halloween? Prankenstein.',
  ]

  const rnsfwc = rnsfw[Math.floor(Math.random() * rnsfw.length)]


    if(message.mentions.members.size == 0) {

    const user = message.author;
    const member = message.guild.member(user);

      message.channel.send(rnsfwc);
    return;
    }

}
