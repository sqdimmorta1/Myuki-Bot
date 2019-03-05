const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const botconfig = require("./botconfig.json");
const fs = require("fs");
const ownerID = "294801596754165772";

let ops = {
  ownerID: ownerID
}


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `bot` var.
    bot.on(eventName, (bot, message, args) => eventFunction.run(bot, message, args));
  });
});


bot.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(botconfig.prefix) !== 0) return;
 
  // This is the best way to define args. Trust me.
  const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args, ops);
  } catch (err) {
    console.error(err);
  }
});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`${bot.guilds.size.toLocaleString()} guilds | m!help`, { "type": "STREAMING", "url": "https://www.twitch.tv/immortal_sonary"});

});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

});

bot.login(process.env.BOT_TOKEN);
