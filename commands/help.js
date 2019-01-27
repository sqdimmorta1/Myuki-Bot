const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

//page 1

if(!args[0] || args[0] == 1) {

  let owner = bot.users.find(u => u.id === `294801596754165772`)

  const dmEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setDescription(`<:molecularYes:508290171507310631> Help menu has been sent to your DMs`)
message.reply(dmEmbed);

  const help1 = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Help menu`)
  .setDescription(`[Support Server](https://discord.gg/jgcBtja) | [Patreon](https://www.patreon.com/sqdimmorta1) | [Invite](https://discordapp.com/oauth2/authorize?client_id=498442154226745365&scope=bot&permissions=2146958847)`)
  .addField(`Information`, `Hello, I'm Myuki! My creator is **${owner}**
  I have over 80+ commands. And they are all absolutely working, these commands are divided into categories. I have standard commands, for example: m!ping, there is moderator commands: m!mute, m!kick etc. There are commands for fun on the similarity: m!hug, m!uptime. In NSFW commands have more than 30+ pieces. To see the commands by category write:`)
  .addField(`**Default commands:**`, `${botconfig.prefix}help default
    ${botconfig.prefix}help def
  **The basic commands of the bot**`)
  .addField(`**Moderator commands:**`, `${botconfig.prefix}help moderator
    ${botconfig.prefix}help moder
    ${botconfig.prefix}help mod
    **Moderator commands for punishment**`)
  .addField(`**Fun commands:**`, `${botconfig.prefix}help fun
    ${botconfig.prefix}help nsfw
    ${botconfig.prefix}help nsfw2
    ${botconfig.prefix}help nsfw3
    **Commands for fun**`)
  .addField(`**Brawl Stars commands:**`, `${botconfig.prefix}brawl
    **Brawl Stars commands**`)
  .addField(`**Admin commands:**`, `${botconfig.prefix}help admin
    **Commands for the administration of the bot**`)
  .addField(`<:molecularBug:508290170790084611> **Discord Support server**`, `[Invite link](https://discord.gg/jgcBtja)
  Here you can find help on our bot. Also here is the developer of the bot and his assistant.`)
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/avatars/498442154226745365/ec57906a45adb619b09e1c8226c524c4.png?size=2048`)
  .setFooter(`Thanks for using Myuki!`);
  message.react("519540649586851850")
          message.author.send(help1);
};
if(args[0] == "default"){
  const defaultEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .addField(`<:molecularSettings:508290170962051074> Myuki's Default commands`, `<:molecularSend:508290171465105438> **${botconfig.prefix}about**
  view bot's info
  <:molecularSend:508290171465105438> **${botconfig.prefix}guildinfo**
  view guild's info
  <:molecularSend:508290171465105438> **${botconfig.prefix}whois <@user>**
  view user's info
  <:molecularSend:508290171465105438> **${botconfig.prefix}calc <numbers to calc>**
  calcs numbers
  <:molecularSend:508290171465105438> **${botconfig.prefix}ping**
  view bot's API latency
  <:molecularSend:508290171465105438> **${botconfig.prefix}partners**
  view bot's partners`)
  message.react("519540649586851850");
message.author.send(defaultEmbed);
  return;
};

if(args[0] == "def"){
  const defEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .addField(`<:molecularSettings:508290170962051074> Myuki's Default commands`, `<:molecularSend:508290171465105438> **${botconfig.prefix}about**
  Display bot's info
  <:molecularSend:508290171465105438> **${botconfig.prefix}guildinfo**
  Display guild's info
  <:molecularSend:508290171465105438> **${botconfig.prefix}whois <@user>**
  Display user's info
  <:molecularSend:508290171465105438> **${botconfig.prefix}calc <numbers to calc>**
  Calculate example
  <:molecularSend:508290171465105438> **${botconfig.prefix}ping**
  Display bot's API latency
  <:molecularSend:508290171465105438> **${botconfig.prefix}partners**
  Display bot's partners`)
  message.react("519540649586851850");
message.author.send(defEmbed);
  return;
};

if(args[0] == "moderator"){
  const moderatorEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .addField(`<:molecularBan:508290171809038356> Myuki's Moderator commands`, `<:molecularSend:508290171465105438> **${botconfig.prefix}purge** <count messages to delete>**
  Delete messages with a specified count
    <:molecularSend:508290171465105438> **${botconfig.prefix}warn <@user> <reason>**
  Warn the user with the specified reason
    <:molecularSend:508290171465105438> **${botconfig.prefix}mute <@user> <time> <reason>**
  Mute the user for a specified time and for a specified reason
    <:molecularSend:508290171465105438> **${botconfig.prefix}unmute <@user>**
  Return the user the gift of speech
    <:molecularSend:508290171465105438> **${botconfig.prefix}kick <@user> <reason>**
  Kick user from server
    <:molecularSend:508290171465105438> **${botconfig.prefix}ban <@user> <reason>**
  Ban user from server
    <:molecularSend:508290171465105438> **${botconfig.prefix}addrole <@user> <@role>**
  Give the user the role you specified
    <:molecularSend:508290171465105438> **${botconfig.prefix}delrole <@user> <@role>**
  Take away from the user the role specified by you`)
  message.react("519540649586851850");
message.author.send(moderatorEmbed);
  return;
};

if(args[0] == "moder"){
  const moderEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .addField(`<:molecularBan:508290171809038356> Myuki's Moderator commands`, `<:molecularSend:508290171465105438> **${botconfig.prefix}purge** <count messages to delete>**
  Delete messages with a specified count
    <:molecularSend:508290171465105438> **${botconfig.prefix}warn <@user> <reason>**
  Warn the user with the specified reason
    <:molecularSend:508290171465105438> **${botconfig.prefix}mute <@user> <time> <reason>**
  Mute the user for a specified time and for a specified reason
    <:molecularSend:508290171465105438> **${botconfig.prefix}unmute <@user>**
  Return the user the gift of speech
    <:molecularSend:508290171465105438> **${botconfig.prefix}kick <@user> <reason>**
  Kick user from server
    <:molecularSend:508290171465105438> **${botconfig.prefix}ban <@user> <reason>**
  Ban user from server
    <:molecularSend:508290171465105438> **${botconfig.prefix}addrole <@user> <@role>**
  Give the user the role you specified
    <:molecularSend:508290171465105438> **${botconfig.prefix}delrole <@user> <@role>**
  Take away from the user the role specified by you`)
  message.react("519540649586851850");
message.author.send(moderEmbed);
  return;
};

if(args[0] == "mod"){
  const modEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .addField(`<:molecularBan:508290171809038356> Myuki's Moderator commands`, `<:molecularSend:508290171465105438> **${botconfig.prefix}purge <count messages to delete>**
  Delete messages with a specified count
    <:molecularSend:508290171465105438> **${botconfig.prefix}warn <@user> <reason>**
  Warn the user with the specified reason
    <:molecularSend:508290171465105438> **${botconfig.prefix}mute <@user> <time> <reason>**
  Mute the user for a specified time and for a specified reason
    <:molecularSend:508290171465105438> **${botconfig.prefix}unmute <@user>**
  Return the user the gift of speech
    <:molecularSend:508290171465105438> **${botconfig.prefix}kick <@user> <reason>**
  Kick user from server
    <:molecularSend:508290171465105438> **${botconfig.prefix}ban <@user> <reason>**
  Ban user from server
    <:molecularSend:508290171465105438> **${botconfig.prefix}addrole <@user> <@role>**
  Give the user the role you specified
    <:molecularSend:508290171465105438> **${botconfig.prefix}delrole <@user> <@role>**
  Take away from the user the role specified by you`)
  message.react("519540649586851850");
message.author.send(modEmbed);
  return;
};

if(args[0] == "fun"){
  const funEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Myuki's Fun commands (1/2 page)`)
  .setDescription(`<:molecularSend:508290171465105438> **${botconfig.prefix}chrom <@user>**
  Display user's chromosome count
    <:molecularSend:508290171465105438> **${botconfig.prefix}iq <@user>**
  Display user's iq count
    <:molecularSend:508290171465105438> **${botconfig.prefix}uptime**
  Displays bot's uptime
    <:molecularSend:508290171465105438> **${botconfig.prefix}slap <@user>**
  Give the user a slap in the face
    <:molecularSend:508290171465105438> **${botconfig.prefix}hug <@user>**
  Hug the user
    <:molecularSend:508290171465105438> **${botconfig.prefix}flex <@user>**
  Flex with user
    <:molecularSend:508290171465105438> **${botconfig.prefix}fakeban <@user>**
  Ban the user (fake)
    <:molecularSend:508290171465105438> **${botconfig.prefix}avatar <@user>**
  Display user's avatar
    <:molecularSend:508290171465105438> **${botconfig.prefix}pickle <@user>**
  Display user's pickle's long
    <:molecularSend:508290171465105438> **${botconfig.prefix}roleinfo <@role>**
  Display information about the role you have defined
    <:molecularSend:508290171465105438> **${botconfig.prefix}emoji <emoji>**
  Display information about the emoji you have defined
    <:molecularSend:508290171465105438> **${botconfig.prefix}discrim <#discriminator>**
  Display discord tags specified by you
    <:molecularSend:508290171465105438> **${botconfig.prefix}top**
  Display top 25 servers with Myuki
    <:molecularSend:508290171465105438> **${botconfig.prefix}cat**
  Display cat's photo
    <:molecularSend:508290171465105438> **${botconfig.prefix}dog**
  Display dog's photo
    <:molecularSend:508290171465105438> **${botconfig.prefix}cow**
  The cow says that you set the text
    <:molecularSend:508290171465105438> **${botconfig.prefix}search <text>**
  Bot searches the Internet for your specified request
    <:molecularSend:508290171465105438> **${botconfig.prefix}yt <text>**
  Bot searches YouTube for your request`)
  .setFooter(`Other fun commands in <m!help fun2>`)
  message.react("519540649586851850");
message.author.send(funEmbed);
  return;
};

if(args[0] == "fun2"){
  const funnEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Myuki's Fun commands (2/2 page)`)
  .setDescription(`<:molecularSend:508290171465105438> **${botconfig.prefix}joke**
    Tell you a joke (not funny)
      <:molecularSend:508290171465105438> **${botconfig.prefix}rps <rock/paper/scissors>**
    Play with bot "Rock! Paper! Scissors!" (not funny)
      <:molecularSend:508290171465105438> **${botconfig.prefix}ascii <text>**
    Write the text you specify in ASCII code
      <:molecularSend:508290171465105438> **${botconfig.prefix}qrcode <text>**
    Give a qrcode with the message you specified
      <:molecularSend:508290171465105438> **${botconfig.prefix}ask <text>**
    Сommunicate with the bot
      <:molecularSend:508290171465105438> **${botconfig.prefix}say <text>**
    Write a message specified by you
      <:molecularSend:508290171465105438> **${botconfig.prefix}reverse <text>**
    Reverse a message specidied by you
      <:molecularSend:508290171465105438> **${botconfig.prefix}work**
    Work and earn money (virtual)
      <:molecularSend:508290171465105438> **${botconfig.prefix}report <@user> <reason>**
    Report user with reason specidied by you
      <:molecularSend:508290171465105438> **${botconfig.prefix}invite <bot id>**
    Send a link to the invitation specified by you ID bot
      <:molecularSend:508290171465105438> **${botconfig.prefix}invites**
    Send a link to the invitation Myuki
      <:molecularSend:508290171465105438> **${botconfig.prefix}8ball <question>**
    Guess on the 8 ball
      <:molecularSend:508290171465105438> **${botconfig.prefix}devs**
    Display bot's developers`)
    .setFooter(`Other fun commands in <m!help fun>`)
  message.react("519540649586851850");
message.author.send(funnEmbed);
  return;
};

if(args[0] == "nsfw"){
  const nsfwEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Myuki's NSFW commands (1/3 page)`)
  .setDescription(`<:molecularSend:508290171465105438> **${botconfig.prefix}nsfw femdom**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw tickle**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw classic**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw ngif**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw erofeet**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw erok**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw poke**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw les**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw hololewd**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw lewdk**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw keta**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw feetg**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw eroyuri**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw kiss**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw kuni**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw tits**
    <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw pussy**`)
    .setFooter(`Other NSFW commands in <m!help nsfw2>`)
  message.react("519540649586851850");
message.author.send(nsfwEmbed);
  return;
};

if(args[0] == "nsfw2"){
  const nsfwwEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Myuki's NSFW commands (2/3 page)`)
  .setDescription(`<:molecularSend:508290171465105438> **${botconfig.prefix}nsfw lizard**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw slap**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw lewd**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw cum**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw cuddle**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw spank**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw smallboobs**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw fox_girl**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw nsfw_avatar**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw hug**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw gecg**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw boobs**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw pat**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw feet**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw smug**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw kemonomimi**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw solog**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw holo**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw wallpaper**`)
    .setFooter(`Other NSFW commands in <m!help nsfw3>`)
  message.react("519540649586851850");
message.author.send(nsfwwEmbed);
  return;
};

if(args[0] == "nsfw3"){
  const nsfwwwEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Myuki's NSFW commands (3/3 page)`)
  .setDescription(`<:molecularSend:508290171465105438> <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw lewdkemo**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw bj**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw yuri**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw trap**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw anal**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw baka**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw blowjob**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw holoero**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw feed**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw neko**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw gasm**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw hentai**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw futanari**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw ero**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw solo**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw waifu**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw pwankg**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw eron**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw erokemo**
  <:molecularSend:508290171465105438> **${botconfig.prefix}nsfw fap**`)
    .setFooter(`Other NSFW commands in <m!help nsfw>`)
  message.react("519540649586851850");
message.author.send(nsfwwwEmbed);
  return;
};

if(args[0] == "admin"){

  const no = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:molecularLocked:508290171452653581> Error: ``This command is only for Owner!``")
  .setTimestamp()
  .setColor("BLURPLE");
  if (!botconfig.owners.includes(message.author.id)) return message.channel.send(no);

  const adminEmbed = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .addField(`<:molecularUser:508290171121303556> Myuki's admin commands`, `<:molecularSend:508290171465105438> **${botconfig.prefix}an1**
  Display announcement
  <:molecularSend:508290171465105438> **${botconfig.prefix}d200**
  Display premium menu (200 rub)
  <:molecularSend:508290171465105438> **${botconfig.prefix}d300**
  Display premium menu (300 rub)
  <:molecularSend:508290171465105438> **${botconfig.prefix}r <command>**
  Reload command
  <:molecularSend:508290171465105438> **${botconfig.prefix}eval <code>**
  Evaluate code
  <:molecularSend:508290171465105438> **${botconfig.prefix}eval2 <code>**
  Evaluate code (sandbox)
  <:molecularSend:508290171465105438> **${botconfig.prefix}botz**
  Display buy bot menu`)
  message.react("519540649586851850");
message.author.send(adminEmbed);
  return;
};

};
