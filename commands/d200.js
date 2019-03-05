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

const embed = new Discord.RichEmbed()
.setColor("#f8ff00")
.setTitle(":yen: Платные услуги ML 2.0")
.setDescription("<@&498445224402485249>")
.setThumbnail("https://i.imgur.com/4yH01HS.png")
.addField("Права", "``ОТДЕЛЬНАЯ КАТЕГОРИЯ! Выделение на сервере, доступ к 2-му и 3-му приват руму, перекидывание, управление никнеймами.``")
.addField("Оплата | Цена: 200 руб/месяц", "[Нажми на меня](https://qiwi.me/mlgaming-donate)")
.addField("Условия", "``Деньги не возвращаем, оскорбления/спам - ЧС, выдаём спонсора только после оплаты, ранг выдаём в течении суток, если не доплатили - спонсор не выдаётся, доплата не осуществляется, обмен вещей/аккаунтов и т.п на спонсора не осуществляются, злоупотребление рангом карается снятием спонсора, выдаём спонсора только при донате на указанную ссылку.``")
.setTimestamp()
.setFooter(`По поводу платных услуг ML 2.0 обращаться к Liryz, Rent | Выдаём ранг на месяц!`)

const no = new Discord.RichEmbed()
.setTitle("Seems like you're missing a required argument:")
.setDescription("<:myuki_warning:508157875563134986> Error: ``This command is only for Owner!``")
.setTimestamp()
.setColor("BLURPLE");

    if (message.author.id !== ops.ownerID) return message.channel.send(no);

             message.channel.send(embed);


}
