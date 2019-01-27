const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perms) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``You don't have permission to:``", perms)
    .setTimestamp()
    .setColor("BLURPLE");

    message.channel.send(embed)
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription(`<:molecularLocked:508290171452653581> Error: \`\`He has permission to ${perms}\`\``)
    .setTimestamp()
    .setColor("BLURPLE");

    message.channel.send(embed)

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``I don't have permissions to ban bot!``")
    .setTimestamp()
    .setColor("BLURPLE");

    message.channel.send(embed)
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<:molecularLocked:508290171452653581> Error: ``I can't find this user``")
    .setTimestamp()
    .setColor("BLURPLE");

    channel.send(embed)
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Seems like you're missing a required argument:")
    .setDescription("<<:molecularLocked:508290171452653581> Error: ``You don't specidy the reason!``")
    .setTimestamp()
    .setColor("BLURPLE");

    channel.send(embed)
}
