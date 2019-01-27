const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

  let money = Math.round(Math.random() * 800);

  let rnsfw = [
    `<:molecularYes:508290171507310631> You collected a whole bag of cans and earned ${money}$!`,
    `<:molecularNo:508290171633139713> While you were collecting tin cans, you were attacked by homeless people and all the cans were taken away, you lost -${money}$!`

  ]

  const rnsfwc = rnsfw[Math.floor(Math.random() * rnsfw.length)]

  message.delete(10);
  return message.channel.send(rnsfwc);
};
