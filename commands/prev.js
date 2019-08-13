
module.exports.run = async (bot, message, args) => {

//page 1

if(!args[0] || args[0] == 1) {

  let owner = bot.users.find(u => u.id === `294801596754165772`)

  const help1 = new Discord.RichEmbed()
  .setTimestamp()
  .setTitle(`Brawlers`)
  .addField(`**Common**`, `<:Shelly_SkinDefault:539071928535744523>${botconfig.prefix}brawl **shelly**
    <:Nita_SkinDefault:539071866833207316>${botconfig.prefix}brawl **nita**
    <:Colt_SkinDefault:539071857064673280>${botconfig.prefix}brawl **colt**
    <:Bull_SkinDefault:539071844897128450>${botconfig.prefix}brawl **bull**
    <:Jessie_SkinDefault:539071835883569152>${botconfig.prefix}brawl **jessie**
    <:Brock_SkinDefault:539071824236118037>${botconfig.prefix}brawl **brock**
    <:Dynamike_SkinDefault:539071813599100949>${botconfig.prefix}brawl **dynamike**
    <:Bo_SkinDefault:539071803008614410>${botconfig.prefix}brawl **bo**`)
  .addField(`**Rare**`, `<:Poco_SkinDefault:539071782754451480>${botconfig.prefix}brawl **poco**
    <:Barley_SkinDefault:539071771438219267>${botconfig.prefix}brawl **barley**
    <:El_Primo_SkinDefault:539071789968654347>${botconfig.prefix}brawl **el-primo**`)
  .addField(`**Super rare**`, `<:Ricochet_SkinDefault:539073031050625026>${botconfig.prefix}brawl **ricochet**
    <:Darryl_SkinDefault:539073049857622028>${botconfig.prefix}brawl **darryl**
    <:Penny_SkinDefault:539073042500812820>${botconfig.prefix}brawl **penny**`)
  .addField(`**Epic**`, `<:Piper_SkinDefault:539071762499895315>${botconfig.prefix}brawl **piper**
    <:Pam_SkinDefault:539071743508348949>${botconfig.prefix}brawl **pam**
    <:Frank_SkinDefault:539071752450473994>${botconfig.prefix}brawl **frank**`)
  .addField(`**Mythical**`, `<:Mortis_SkinDefault:539071727297363968>${botconfig.prefix}brawl **mortis**
    <:Tara_SkinDefault:539071735249764353>${botconfig.prefix}brawl tara`)
  .addField(`**Legendary**`, `<:Spike_SkinDefault:539071684960059392>${botconfig.prefix}brawl **spike**
    <:Crow_SkinDefault:539071718996705281>${botconfig.prefix}brawl **crow**
    <:Leon_SkinDefault:539071710129946624>${botconfig.prefix}brawl **leon**`)
  .setColor("BLURPLE")
          message.channel.send(help1);
};
if(args[0] == "shelly"){
  const shelly = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Shelly`)
  .setDescription(`Shelly is a Brawler that is unlocked upon beginning the game. She has moderate health and damage output. Her shotgun deals more damage the closer Shelly is to her target, making her excellent for short to mid-range combat. Her attacks have a wide spread as well. Her Super can clear several obstacles and will also knock back and stun enemy Brawlers.`)
  .addField(`**Attack: Buckshot**`, `Shelly's boomstick is always locked and loaded. You don't want to be anywhere in front of this baby.
  *Shelly fires a burst of shells dealing medium damage. The attack is more effective at close range since more of the shells will hit the opponent, but the maximum range of the attack is quite far. This makes Shelly excel in close quarters combat, especially against squishier Brawlers.*`)
  .addField(`**Super: Super Shell**`, `Shelly's Super Shell obliterates both cover and enemies. Any survivors get knocked out of the way.
  *Shelly's Super fires a highly damaging burst of shells which can not only destroy obstacles, but also stun and knock back enemy Brawlers. Super Shell can be used defensively to knock enemies away from Shelly and her teammate or to interrupt an enemy Super such as Colt's. Alternatively, you can use it to sweep bushes and destroy obstacles to uncover enemies.*`)
  .addField(`**Star Power: Shell Shock**`, `Shelly's Super shells slow down enemies for 2.5 seconds!
    *People caught in the range of Shelly’s Super Shell are slowed down by a considerable amount. This allows Shelly and her teammates to quickly close the gap on enemies.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/5/5e/Shelly_Skin-Default.png/revision/latest?cb=20181212051920")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/e/e5/Shelly_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173718")
message.channel.send(shelly);
  return;
};
