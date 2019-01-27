const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const ownerID = "294801596754165772";

let ops = {
  ownerID: ownerID
}

module.exports.run = async (bot, message, args) => {

    const ownerEmbed = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``This command is only for Owner!``")
    .setTimestamp()
    .setColor("BLURPLE");

    if (message.author.id !== ops.ownerID) return message.channel.send(ownerEmbed);

    const epta = new Discord.RichEmbed()
    .setTitle(`:desktop: Бот на заказ`)
    .setDescription(`Бот на заказ.`)
    .addField(`:desktop: Нужен ли вам многофункциональный бот?`, `Если да то смотрите ниже критерии`)
    .addField(`ﾠ`, `:dollar: Цена бота от 100 до 2000 рублей в зависимости сложности вашего заказа.`)
    .addField(`ﾠ`, `:gear: Делаю бота только на JavaScript!`)
    .addField(`ﾠ`, `:floppy_disk: Работаю в программе Atom Editor.`)
    .setFooter(`Удачных покупок от ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("BLURPLE");

    message.channel.send(epta);

}
