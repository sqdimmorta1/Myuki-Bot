const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

//page 1

if(!args[0] || args[0] == 1) {

  const help1 = new Discord.RichEmbed()

          message.channel.send("help1");
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

};


