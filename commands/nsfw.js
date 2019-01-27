const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {

//page 1

if(!args[0] || args[0] == 1) {

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)

  const help1 = new Discord.RichEmbed()
  .setColor("#ff4949")
  .addField(`🔞Nsfw commands`, `[Support Server](https://discord.gg/jgcBtja) | [Patreon](https://www.patreon.com/sqdimmorta1) | [Invite](https://discordapp.com/oauth2/authorize?client_id=498442154226745365&scope=bot&permissions=2146958847)`)
  .setThumbnail("https://i.imgur.com/0Rh1ykB.png")
  .setFooter(`Type $nsfw <command> to use`)
  .addField(`:gear: Commands:`, `\`\`\`diff\n\- femdom, tickle, classic, ngif, erofeet, erok, poke, les, hololewd, lewdk, keta, feetg, eroyuri, kiss, kuni, tits, pussy, lewdkemo, lizard, slap, lewd, cum, cuddle, spank, smallboobs, fox_girl, nsfw_avatar, hug, gecg, boobs, pat, feet, smug, kemonomimi, solog, holo, wallpaper, bj, yuri, trap, anal, baka, blowjob, holoero, feed, neko, gasm, hentai, futanari, ero, solo, waifu, pwankg, eron, erokemo, fap\`\`\``)
          message.channel.send(help1);
return;
}
                    //page userinfo
                    if(args[0] == "femdom"){

                      const nonsfw = new Discord.RichEmbed()
                      .setTitle("Seems like you're missing a required argument:")
                      .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
                      .setTimestamp()
                      .setColor("#170041");

                      if (!message.channel.nsfw) return message.channel.send(nonsfw)
                      let {
                        body
                      } = await superagent
                        .get(`https://nekos.life/api/v2/img/femdom`);

                      let femdomembed = new Discord.RichEmbed()

                        .setImage(body.url)
                        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

                      message.channel.send(femdomembed)
};
                                    if(args[0] == "tickle"){

                                      const nonsfw = new Discord.RichEmbed()
                                      .setTitle("Seems like you're missing a required argument:")
                                      .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
                                      .setTimestamp()
                                      .setColor("#170041");

                                      if (!message.channel.nsfw) return message.channel.send(nonsfw)
                                      let {
                                        body
                                      } = await superagent
                                        .get(`https://nekos.life/api/v2/img/tickle`);

                                      let tickleembed = new Discord.RichEmbed()

                                        .setImage(body.url)
                                        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

                                      message.channel.send(tickleembed)
    };
    if(args[0] == "classic"){

      const nonsfw = new Discord.RichEmbed()
      .setTitle("Seems like you're missing a required argument:")
      .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
      .setTimestamp()
      .setColor("#170041");

      if (!message.channel.nsfw) return message.channel.send(nonsfw)
      let {
        body
      } = await superagent
        .get(`https://nekos.life/api/v2/img/classic`);

      let classicembed = new Discord.RichEmbed()

        .setImage(body.url)
        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

      message.channel.send(classicembed)
};
if(args[0] == "ngif"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/ngif`);

  let ngifembed = new Discord.RichEmbed()

    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(ngifembed)
};
if(args[0] == "erofeet"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/erofeet`);

  let erofeetembed = new Discord.RichEmbed()

    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(erofeetembed)
};
if(args[0] == "meow"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/meow`);

  let meowembed = new Discord.RichEmbed()

    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(meowembed)
};
if(args[0] == "erok"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/erok`);

  let erokeembed = new Discord.RichEmbed()

    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(erokeembed)
};
if(args[0] == "poke"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/poke`);

  let pokeembed = new Discord.RichEmbed()

    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(pokeembed)
};
if(args[0] == "les"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/les`);

  let lesembed = new Discord.RichEmbed()

    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(lesembed)
};
if(args[0] == "hololewd"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/hololewd`);

  let hololewdembed = new Discord.RichEmbed()

    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(hololewdembed)
};
if(args[0] == "lewdk"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/lewdk`);

  let lewdkembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(lewdkembed)
};
if(args[0] == "keta"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/keta`);

  let ketaembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(ketaembed)
};
if(args[0] == "feetg"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/feetg`);

  let feetgembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(feetgembed)
};
if(args[0] == "eroyuri"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/eroyuri`);

  let eroyuriembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(eroyuriembed)
};
if(args[0] == "kiss"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

  let kissembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(kissembed)
};
if(args[0] == "kuni"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/kuni`);

  let kuniembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(kuniembed)
};
if(args[0] == "tits"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/tits`);

  let titsembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(titsembed)
};
if(args[0] == "pussy"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/pussy`);

  let pussyembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(pussyembed)
};
if(args[0] == "lewdkemo"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/lewdkemo`);

  let lewdkemoembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(lewdkemoembed)
};
if(args[0] == "lizard"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/lizard`);

  let lizardembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(lizardembed)
};
if(args[0] == "slap"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);

  let slapembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(slapembed)
};
if(args[0] == "lewd"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/lewd`);

  let lewdembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(lewdembed)
};
if(args[0] == "cum"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/cum`);

  let cumembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(cumembed)
};
if(args[0] == "cuddle"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/cuddle`);

  let cuddleembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(cuddleembed)
};
if(args[0] == "spank"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/spank`);

  let spankembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(spankembed)
};
if(args[0] == "smallboobs"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/smallboobs`);

  let sbembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(sbembed)
};
if(args[0] == "fox_girl"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/fox_girl`);

  let fgembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(fgembed)
};
if(args[0] == "nsfw_avatar"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/nsfw_avatar`);

  let naembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(naembed)
};
if(args[0] == "hug"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

  let hugembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(hugembed)
};
if(args[0] == "gecg"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/gecg`);

  let gecgembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(gecgembed)
};
if(args[0] == "boobs"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/boobs`);

  let boobsembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(boobsembed)
};
if(args[0] == "pat"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/pat`);

  let patembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(patembed)
};
if(args[0] == "feet"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/feet`);

  let feetembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(feetembed)
};
if(args[0] == "smug"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/smug`);

  let smugembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(smugembed)
};
if(args[0] == "kemonomimi"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/kemonomimi`);

  let kemonominiembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(kemonominiembed)
};
if(args[0] == "solog"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/solog`);

  let sologembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(sologembed)
};
if(args[0] == "holo"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/holo`);

  let holoembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(holoembed)
};
if(args[0] == "wallpaper"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/wallpaper`);

  let wpembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(wpembed)
};
if(args[0] == "bj"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/bj`);

  let bjembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(bjembed)
};
if(args[0] == "yuri"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/yuri`);

  let yuriembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(yuriembed)
};
if(args[0] == "trap"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/trap`);

  let trapembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(trapembed)
};
if(args[0] == "anal"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/anal`);

  let analembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(analembed)
};
if(args[0] == "baka"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/baka`);

  let bakaembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(bakaembed)
};
if(args[0] == "blowjob"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/blowjob`);

  let blowjobembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(blowjobembed)
};
if(args[0] == "holoero"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/holoero`);

  let holoeroembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(holoeroembed)
};
if(args[0] == "feed"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/feed`);

  let feedembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(feedembed)
};
if(args[0] == "neko"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/neko`);

  let nekoembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(nekoembed)
};
if(args[0] == "gasm"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/gasm`);

  let gasmembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(gasmembed)
};
if(args[0] == "hentai"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/hentai`);

  let hentaiembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(hentaiembed)
};
if(args[0] == "futunari"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/futunari`);

  let futunariembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(futunariembed)
};
if(args[0] == "ero"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/ero`);

  let eroembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(eroembed)
};
if(args[0] == "solo"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/solo`);

  let soloembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(soloembed)
};
if(args[0] == "waifu"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/waifu`);

  let waifuembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(waifuembed)
};
if(args[0] == "pwankg"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/pwankg`);

  let pwankgembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(pwankgembed)
};
if(args[0] == "eron"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/eron`);

  let eronembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(eronembed)
};
if(args[0] == "erokemo"){

  const nonsfw = new Discord.RichEmbed()
  .setTitle("Seems like you're missing a required argument:")
  .setDescription("<:myuki_warning:508157875563134986> Error: ``It's not NSFW channel!``")
  .setTimestamp()
  .setColor("#170041");

  if (!message.channel.nsfw) return message.channel.send(nonsfw)
  let {
    body
  } = await superagent
    .get(`https://nekos.life/api/v2/img/erokemo`);

  let erokemoembed = new Discord.RichEmbed()

    .setTitle("<a:GWpepelandGachiBass:512866378101948416>")
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL}`)

  message.channel.send(erokemoembed)
};

};
