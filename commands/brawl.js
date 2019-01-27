const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

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

if(args[0] == "colt"){
  const colt = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Colt`)
  .setDescription(`Colt is a Brawler who is unlocked as a Trophy League reward upon reaching 60 Trophies. He has low hitpoints but high damage output. He fires many shots per Attack, and those shots have a very long range. His Super is very similar to his main Attack, but it fires an extra-long volley that can destroy obstacles.`)
  .addField(`**Attack: Six-Shooters**`, `Colt lets his long-range revolvers do his talking for him. He never seems to run out of lines.
  *Colt sends a volley of several bullets flying. Their long range can pick off distant enemies. Each bullet by itself does little damage, but a whole volley hitting an enemy can be devastating.*`)
  .addField(`**Super: Bullet Storm**`, `Colt spins his chambers, rattling off a massive burst of bullets that will shred through almost anything.
  *Colt fires an extra-long volley of bullets. These bullets appear larger in size, have a considerably longer range, and have the ability to destroy bushes and walls and hit enemies behind them.*`)
  .addField(`**Star Power: Slick Boots**`, `Colt gets slick new boots that put a spring in his step, increasing his movement speed!
    *Colt's movement speed is increased by 60 points, allowing him to move faster than most other Brawlers.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/8/8a/Colt_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20171111185814")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/0/08/Colt_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173806")
message.channel.send(colt);
  return;
};

if(args[0] == "nita"){
  const nita = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Nita`)
  .setDescription(`Nita is a Brawler that is unlocked as a Trophy League reward upon reaching 10 Trophies. She is most notable for her Super's ability to summon the "Big Baby Bear," a powerful familiar with high health and quick, dangerous melee attacks. Nita herself has moderate health and attacks with shockwaves that have short range and can hit multiple enemies.`)
  .addField(`**Attack: Rupture**`, `Nita sends forth a shockwave, rupturing the ground and damaging enemies caught in the tremor.
  *Nita creates a ranged shockwave that deals moderate damage to all enemies that it hits. It has moderate range, and the shockwave is fairly wide, though it does not spread out as it travels.*`)
  .addField(`**Super: Overbearing**`, `Nita calls the spirit of Big Baby Bear to manifest and maul her enemies.
  *Summons a "Big Baby Bear" to chase down and maul enemies. After the Super button is tapped, the player can choose a location near Nita to throw the spell. The bear will then be summoned at that location. The "Big Baby Bear" walks towards the nearest enemy and attempts to hit them with quick melee attacks that do major damage. The bear has very high health, comparable to that of notably high-health Brawlers like El Primo. Every time you upgrade Nita, you are increasing the bear's Attack Damage and Health along with Nita's.*`)
  .addField(`**Star Power: Bear With Me**`, `Nita recovers 300 health whenever her bear hits an enemy. When Nita deals damage, her bear regains 300 health.
    *This is a useful passive that allows Nita to heal herself and her bear. In order to maximize healing, throw the bear into a large group of Brawlers so it lands more hits to heal Nita. Likewise, Nita can also join in the fight to keep her bear alive for longer.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/3/36/Nita_Skin-Default.png/revision/latest?cb=20181212051918")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/9/9f/Nita_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174251")
message.channel.send(nita);
  return;
};

if(args[0] == "bull"){
  const bull = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Bull`)
  .setDescription(`Bull is a Brawler who is unlocked as a Trophy League reward upon reaching 250 Trophies. Like Shelly, he wields a shotgun. Bull has a high amount of hitpoints while also excelling at short to mid-range combat. These attributes make him great at ambushing enemy Brawlers and overwhelming them. His Super allows him to charge forward, damaging enemies and destroying obstacles in his way.`)
  .addField(`**Attack: Double-Barrel**`, `Bull can't see ten feet, but he doesn't need to! His double barreled shotgun can blow off a barn door with ease.
  *Bull fires a burst of 5 shells dealing medium damage on their own but can deal extreme damage when all the shells connect. The maximum range of the Attack is much shorter than Shelly's, who also wields a shotgun, but Bull's shells deal more damage. The Attack is more effective at close range since more of the shells will hit the opponent. This combined with his high health means Bull excels at ambushing enemy Brawlers by rushing in next to them and firing at them from as close as possible, dealing great damage.*`)
  .addField(`**Super: Bulldozer**`, `Bull has always been headstrong. So he puts his head down and bulldozes through opponents and obstacles.
  *Bull runs a long distance in a straight line in any direction. He destroys any obstacles that he makes contact with and knocks back and deals some damage to enemies that he hits.*`)
  .addField(`**Star Power: Berserker**`, `When Bull falls below 40% health, his reload speed doubles!`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/b/b7/Bull_Skin-Default.png/revision/latest?cb=20181212051919")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/4/4a/Bull_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174132")
message.channel.send(bull);
  return;
};

if(args[0] == "jessie"){
  const jessie = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Jessie`)
  .setDescription(`Jessie is a Brawler who is unlocked as a Trophy League reward upon reaching 500 Trophies. Her Super builds a turret with moderate health and damage. It's an excellent support, whether it's attacking, distracting, or defending. Jessie herself has medium health and damage. Her mid-range Attacks have high damage potential because they can bounce when they hit an enemy and may hit other nearby enemies.`)
  .addField(`**Attack: Shock Rifle**`, `Jessie's own invention, the Shock Rifle, fires an energy orb that seeks out up to 3 targets before fizzling out.
  *Jessie's main Attack is a medium-range energy orb with moderate damage and a small radius. When the orb hits an enemy, it bounces toward the next nearest enemy. It can bounce up to 2 times and hit 3 enemies in total before disappearing.*`)
  .addField(`**Super: Scrappy!**`, `Jessie cobbles together a gun turret out of random scrap. She's a genius!
  *When her Super is used, Jessie builds a turret with moderate damage and health. This turret can be thrown anywhere within a short distance from Jessie. The turret is stationary and fires rapidly at enemy Brawlers.*`)
  .addField(`**Star Power: Energize**`, `Jessie modifies her Shock Rifle to recharge her turrets! Hitting a turret restores 800 of its missing health.
    *Jessie's Star Power allows her to hit her turret with her normal Attack to heal it. The Attack will still bounce towards the closest enemy like normal, meaning that your Attacks will still hint to enemy whereabouts and may even hit them*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/1/15/Jessie_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20180927233605")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/4/4e/Jessie_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173920")
message.channel.send(jessie);
  return;
};

if(args[0] == "brock"){
  const brock = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Brock`)
  .setDescription(`Brock is a Brawler who is unlocked as a Trophy League reward upon reaching 1000 Trophies. He can put out major damage if his attacks are aimed carefully. His long-range rockets deal high damage in a small area on impact, but he has a long reload time. He also has low health, so he is best at supporting other Brawlers from behind.`)
  .addField(`**Attack: Rockin' Rocket**`, `Brock lets fly with a single Rockin' Rocket that really goes the distance.
  *His attack is a long range missile that deals high damage in a small radius on impact. However, Brock's Attacks reload rather slowly and travel slowly as well.*`)
  .addField(`**Super: Rocket Rain**`, `Brock only wants to see you bathing in Rocket Rain: an explosive deluge that takes out enemies and obstacles.
  *When Brock's Super is used he launches a volley of 9 rockets spread out over a large area, dealing heavy damage. These rockets can destroy obstacles. This attack's range is similar to that of Brock's main attack.*`)
  .addField(`**Star Power: Incendiary**`, `Brock's main attack rockets set the ground on fire on impact. Enemies in the area take 240 damage per second!
    *Brock's rockets gain a unique and powerful ability called Incendiary. Upon detonation or contact with an enemy, the rocket leaves a patch of fire that disappears after a few seconds. These flames can deal considerable damage. Friendly flames appear blue, and enemy flames appear orange. Incendiary does not affect Brock's Super.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/7/70/Brock_Skin-Default.png/revision/latest?cb=20181212051918")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/f/f9/Brock_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173633")
message.channel.send(brock);
  return;
};

if(args[0] == "dynamike"){
  const dynamike = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Dynamike`)
  .setDescription(`Dynamike is a Brawler who is unlocked as a Trophy League reward upon reaching 2000 Trophies. He has low hitpoints and high damage output. He attacks by throwing sticks of dynamite that blow up and deal damage in a small radius. When he uses his Super, he throws a large barrel bomb that does very high damage in a large radius around it and knocks back enemy Brawlers when it detonates. The dynamite and the barrel bomb can both be thrown over walls.`)
  .addField(`**Attack: Short Fuse**`, `Short-tempered Mike is always moments from blowing up, just like the two lit sticks of dynamite he tosses.
  *Mike throws two sticks of dynamite at a time that blow up after a short delay and deal heavy damage to any enemies caught in their blast radii. The two sticks spread out a short distance from each other perpendicular to the direction of the throw as they travel, and they detonate simultaneously.*`)
  .addField(`**Super: Big Barrel o' Boom**`, `A big-bada-barrel of dynamite blows up just about everything. Enemies get knocked back on impact!
  *Mike throws the barrel bomb that he carries on his back. The bomb can be thrown a fair distance and when it detonates, it deals very high damage to enemies within its large blast radius. Any Brawlers that survive the damage are knocked back away from the bomb's former location.*`)
  .addField(`**Star Power: Dyna-Jump**`, `Dynamike can now use the concussive force of his attacks and Super to propel himself in the air, even over walls!
    *Dynamike's main attack and Super propel him a short distance away from the detonation point. He can also jump over walls.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/6/6e/Dynamike_Skin-Default.png/revision/latest?cb=20181212051918")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/6/64/Dynamike_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173612")
message.channel.send(dynamike);
  return;
};

if(args[0] == "bo"){
  const bo = new Discord.RichEmbed()
  .setColor("BLURPLE")
  .setTitle(`Bo`)
  .setDescription(`Bo is a Brawler unlocked as a Trophy League reward upon reaching 3000 Trophies. He has fairly high health and fires exploding arrows that deal moderate damage at long range. His Super places traps in an area that explode when an enemy Brawler gets near them.`)
  .addField(`**Attack: Eagle-eyed**`, `Bo releases a trio of exploding arrows, tearing up enemies like an eagle's talons.
  *Bo shoots three explosive arrows that can deal moderate damage to enemies within a small radius from their point of detonation. They have a long range.*`)
  .addField(`**Super: Catch a Fox**`, `Bo hides explosive traps on the ground. Enemies stepping on them get blown up and away!
  *Bo throws three mines that explode 1.15 seconds after being triggered by enemies, dealing damage to any enemies near them. The traps are invisible to enemy Brawlers when placed, but when triggered, they beep and flash momentarily before exploding.*`)
  .addField(`**Star Power: Circling Eagle**`, `Bo gains the ability to spot enemies hidden in bushes from an uncanny distance. Shared with teammates!
    *This powerful passive allows Bo and everyone on his team to see 4 tiles into Bushes (on Bo's view), instead of the normal 2 tiles. This can even allow you to see far into bushes that you aren't near to.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/e/ee/Bo_Skin-Default.png/revision/latest?cb=20170706213900")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/3/30/Bo_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174309")
message.channel.send(bo);
  return;
};

if(args[0] == "poco"){
  const poco = new Discord.RichEmbed()
  .setColor("#42f462")
  .setTitle(`Poco`)
  .setDescription(`Poco is a Rare Brawler who is most notable for his Attack's extremely wide spread. He can deal damage to multiple enemies within his wide-spread attack range. Aside from that, his statistics are average; having moderate health and damage output. His Super is unique in that it allows him to heal himself and all allies within its range.`)
  .addField(`**Attack: Power Chord**`, `Poco strums his guitarrón, sending forward bone-jarring sound waves. Enemies hit by the waves take damage.
  *Poco releases a wave that takes the appearance of musical notes. The attack's range is fairly short, but it spreads out drastically as it travels, allowing it to cover a very large area in front of Poco and deal moderate damage to any enemies caught in that area.*`)
  .addField(`**Super: Encore**`, `Poco plays an uplifting melody that heals himself and any teammates within range. Encore!
  *When his Super is used, his next musical wave will heal him and any allies that are hit by the wave. Unlike his regular Attack, this wave can pass through walls.*`)
  .addField(`**Star Power: Da Capo!**`, `When Power Chord hits friendly Brawlers they now heal for 400 health.
    *This Star Power allows Poco to heal allied Brawlers for 400 health with his regular Attack while simultaneously damaging enemy Brawlers.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/2/24/Poco_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20180923223437")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/5/59/Poco_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174328")
message.channel.send(poco);
  return;
};

if(args[0] == "barley"){
  const barley = new Discord.RichEmbed()
  .setColor("#42f462")
  .setTitle(`Barley`)
  .setDescription(`Barley is a Rare Brawler with low health but has a unique type of Attack in which he throws bottles of liquid that cover the ground and deal damage to enemies standing on it over time. His Super is very similar, but it can cover a much larger area. You can unlock Barley for free by linking your game to your Supercell ID.`)
  .addField(`**Attack: Undiluted**`, `Barley lobs a bottle, breaking it and spilling the contents. Its corrosive contents damage enemies standing in the puddle.
  *Barley throws a bottle of liquid that shatters and deals damage to enemy Brawlers who are standing in the area that the liquid covers. The damage can hit multiple times if the enemy remains standing on the liquid. After a short time, the liquid disappears.*`)
  .addField(`**Super: Last Call**`, `This one’s on the house! Barley hurls a flurry of fiery bottles, covering a huge area in flames. Get out of there, bad guys!
  *He throws several bottles of flaming liquid that covers a very large area and deals damage over time. It is mechanically very similar to Barley's main attack; the damage can hit multiple times if the enemy remains standing on the liquid, and after a short time, the liquid disappears. The bottles in Barley's Super will land farther apart the farther away from Barley the attack is targeted. The closer you are to your target, the more damage it will deal because there are more bottles in less area.*`)
  .addField(`**Star Power: Medical Use**`, `Barley takes a swig from every bottle he tosses, regaining 200 health from each main attack.
    *Whenever Barley throws a bottle from his main attack, he regains 200 hitpoints. This effect does not affect his Super.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/3/3c/Barley_Skin-Default.png/revision/latest?cb=20181212051919")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/a/a1/Barley_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174218")
message.channel.send(barley);
  return;
};

if(args[0] == "el-primo"){
  const primo = new Discord.RichEmbed()
  .setColor("#42f462")
  .setTitle(`El Primo`)
  .setDescription(`El Primo is a Rare Brawler who attacks with his fists, doing major damage to enemies that he is able to get close enough to. El Primo also has very high health, allowing him to withstand a lot of damage. With his Super, he can jump a long distance and crash down on opponents, dealing damage.`)
  .addField(`**Attack: Fists of Fury**`, `El Primo fires off a furious flurry of four fiery fists. That's a spicy jalapeno knuckle sandwich!
  *El Primo fires off a burst of four punches at short range doing high damage. El Primo must be quite close to his targets to damage them, but he cannot damage targets that he is right on top of. His punches hit a fair sized area, so it is possible for him to hit multiple enemies with each punch.*`)
  .addField(`**Super: Flying Elbow Drop**`, `Leaping high, El Primo drops an Intergalactic Elbow that pounds and pushes away anything he lands on!
  *When El Primo's Super is used, he jumps a short distance dealing damage and knocking back enemy Brawlers. The damage dealt is rather minor. His Super is mostly used to get El Primo into range of enemy Brawlers so that he can hit them with his main Attack.*`)
  .addField(`**Star Power: El Fuego**`, `El Primo comes down like a comet! Enemies caught in his Super will burn for 600 damage over 4 seconds.
    *When El Primo uses his Super, he sets fire to enemies that he hits at the end of his leap. This burning effect causes affected enemies to take a total of 600 damage over 4 seconds. It is very similar to Crow's poison effect.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/0/04/El_Primo_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20171111185859")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/c/c5/El_Primo_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173902")
message.channel.send(primo);
  return;
};

if(args[0] == "elprimo"){
  const primo = new Discord.RichEmbed()
  .setColor("#42f462")
  .setTitle(`El Primo`)
  .setDescription(`El Primo is a Rare Brawler who attacks with his fists, doing major damage to enemies that he is able to get close enough to. El Primo also has very high health, allowing him to withstand a lot of damage. With his Super, he can jump a long distance and crash down on opponents, dealing damage.`)
  .addField(`**Attack: Fists of Fury**`, `El Primo fires off a furious flurry of four fiery fists. That's a spicy jalapeno knuckle sandwich!
  *El Primo fires off a burst of four punches at short range doing high damage. El Primo must be quite close to his targets to damage them, but he cannot damage targets that he is right on top of. His punches hit a fair sized area, so it is possible for him to hit multiple enemies with each punch.*`)
  .addField(`**Super: Flying Elbow Drop**`, `Leaping high, El Primo drops an Intergalactic Elbow that pounds and pushes away anything he lands on!
  *When El Primo's Super is used, he jumps a short distance dealing damage and knocking back enemy Brawlers. The damage dealt is rather minor. His Super is mostly used to get El Primo into range of enemy Brawlers so that he can hit them with his main Attack.*`)
  .addField(`**Star Power: El Fuego**`, `El Primo comes down like a comet! Enemies caught in his Super will burn for 600 damage over 4 seconds.
    *When El Primo uses his Super, he sets fire to enemies that he hits at the end of his leap. This burning effect causes affected enemies to take a total of 600 damage over 4 seconds. It is very similar to Crow's poison effect.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/0/04/El_Primo_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20171111185859")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/c/c5/El_Primo_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173902")
message.channel.send(primo);
  return;
};

if(args[0] == "primo"){
  const primo = new Discord.RichEmbed()
  .setColor("#42f462")
  .setTitle(`El Primo`)
  .setDescription(`El Primo is a Rare Brawler who attacks with his fists, doing major damage to enemies that he is able to get close enough to. El Primo also has very high health, allowing him to withstand a lot of damage. With his Super, he can jump a long distance and crash down on opponents, dealing damage.`)
  .addField(`**Attack: Fists of Fury**`, `El Primo fires off a furious flurry of four fiery fists. That's a spicy jalapeno knuckle sandwich!
  *El Primo fires off a burst of four punches at short range doing high damage. El Primo must be quite close to his targets to damage them, but he cannot damage targets that he is right on top of. His punches hit a fair sized area, so it is possible for him to hit multiple enemies with each punch.*`)
  .addField(`**Super: Flying Elbow Drop**`, `Leaping high, El Primo drops an Intergalactic Elbow that pounds and pushes away anything he lands on!
  *When El Primo's Super is used, he jumps a short distance dealing damage and knocking back enemy Brawlers. The damage dealt is rather minor. His Super is mostly used to get El Primo into range of enemy Brawlers so that he can hit them with his main Attack.*`)
  .addField(`**Star Power: El Fuego**`, `El Primo comes down like a comet! Enemies caught in his Super will burn for 600 damage over 4 seconds.
    *When El Primo uses his Super, he sets fire to enemies that he hits at the end of his leap. This burning effect causes affected enemies to take a total of 600 damage over 4 seconds. It is very similar to Crow's poison effect.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/0/04/El_Primo_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20171111185859")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/c/c5/El_Primo_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173902")
message.channel.send(primo);
  return;
};

if(args[0] == "darryl"){
  const darryl = new Discord.RichEmbed()
  .setColor("#41a0f4")
  .setTitle(`Darryl`)
  .setDescription(`Darryl is a Super Rare Brawler with a high amount of health. He wields two double barrel shotguns that can deal a lot of damage the closer he is to his target. His Super allows him to quickly escape enemies or get closer to them as well as damage any enemies that he rolls into.`)
  .addField(`**Attack: Double Deuce**`, `These double barrel shotguns fire two staggered blasts of heavy close-range damage.
  *Darryl fires two bursts of shells, one from each gun in quick succession, dealing medium damage. The attack has less range than Shelly's Attack but more range than Bull's. This attack deals more damage at shorter ranges.*`)
  .addField(`**Super: Barrel Roll**`, `Darryl jumps into his barrel and rolls around, bouncing off walls and damaging any enemies he hits.
  *Darryl rolls a short distance at a very rapid speed, ricocheting off walls, and damaging and pushing back enemies he hits. Darryl's Super is unique in that it automatically recharges over 20 seconds.*`)
  .addField(`**Star Power: Steel Hoops**`, `Darryl's super Reinforces his barrel, reducing all damage he takes by 30% for 3.5 seconds.
    *The damage reduction granted by his Star Power makes it less likely that Darryl will be defeated while he is rolling around during his Barrel Roll ability and continues to protect him for 3.5 seconds after he stops rolling. This makes his Super even better for safely escaping dangerous situations and less risky when the Super is being used to roll into and damage enemy Brawlers.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/6/66/Darryl_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20171207183139")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/4/46/Darryl_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173943")
message.channel.send(darryl);
  return;
};

if(args[0] == "ricochet"){
  const darryl = new Discord.RichEmbed()
  .setColor("#41a0f4")
  .setTitle(`Ricochet`)
  .setDescription(`Ricochet is a Super Rare Brawler with low health and moderate damage output, but he is unique in that his Attack and Super use bullets that can bounce off of walls and keep traveling. When properly utilized, this ability can allow Ricochet to knock out enemy Brawlers without coming under fire himself.`)
  .addField(`**Attack: Bouncy Bullets**`, `Ricochet's bullets bounce off everything except his opponents, and can hit them behind cover.
  *Ricochet's main attack is a small burst of bullets with low spread that can bounce off of walls. This is really useful in situations when an enemy is around a corner because Ricochet will be able to hit them while they cannot easily retaliate. With each bounce, the bullets gain 1.67 tiles of additional range.*`)
  .addField(`**Super: Trick Shot**`, `Ricochet fires a long burst of bullets that can pierce through enemies and bounce off walls.
  *When his Super is used it fires a larger, longer-range burst of bouncing bullets which can keep traveling after hitting an enemy and can bounce off walls. This is very useful in situations when the enemies are all grouped together, allowing you to hit multiple targets. This attack is very similar to Ricochet's main attack and can be used to hit enemies around corners as well.*`)
  .addField(`**Star Power: Super Bouncy**`, `Ricochet's bullets, from attack and Super alike, get supercharged by their first bounce and deal +80 damage!
    *If Ricochet's bullets (from either main attack or Super) bounce off a wall, they turn white, travel faster, and deal 80 bonus damage.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/0/0b/Ricochet_Skin-Default.png/revision/latest/scale-to-width-down/307?cb=20171111190010")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/1/11/Ricochet_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174354")
message.channel.send(darryl);
  return;
};

if(args[0] == "penny"){
  const penny = new Discord.RichEmbed()
  .setColor("#41a0f4")
  .setTitle(`Penny`)
  .setDescription(`Penny is a Super Rare Brawler who can place a cannon when you use her Super that has medium health, very high damage output and can hit enemies behind walls. Penny herself has medium health and her medium-range Attack can hit enemies behind the original target for the same damage.`)
  .addField(`**Attack: Plunderbuss**`, `Shoots out a pouch of fool’s gold. If the pouch hits an enemy, it bursts and coins pepper targets behind the first enemy.
  *Penny's main attack shoots a medium-sized pouch of gold out of her musket. If it hits, it will additionally spray three clumps of golden coins behind the target, piercing opponents and dealing the same damage of that of the pouch. It's a great attack against enemies that are too close to each other.*`)
  .addField(`**Super: Old Lobber**`, `Penny sets up her cannon! It can shoot at enemies at a long range, even if they are behind cover.
  *When her Super is used, Penny drops a cannon with high damage and health. This turret can be thrown anywhere within a short distance from Penny. The turret is stationary and fires cannonballs at brawlers even if they're behind walls. However, it has a rather slow reload, and the cannonballs are also slow and predictable.*`)
  .addField(`**Star Power: Last Blast**`, `When Penny's cannon is destroyed, it shoots out one last barrage of bombs each dealing 1680 damage.
    *When the cannon is destroyed or replaced by another cannon, it will fire several cannonballs that land nearby, each dealing 1680 damage to any enemy that it hits.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/d/d6/Penny_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20180518182615")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/8/8d/Penny_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173828")
message.channel.send(penny);
  return;
};

if(args[0] == "piper"){
  const piper = new Discord.RichEmbed()
  .setColor("#e100ff")
  .setTitle(`Piper`)
  .setDescription(`Piper is an Epic Brawler with low health but the potential to do very high damage to her targets. Her single-shot Attack does more damage if she is farther away, so she excels at supporting her team as a sniper. Her Super allows her to jump away from her enemies and damage them as she goes.`)
  .addField(`**Attack: Gunbrella**`, `Piper fires a sniper shot from the tip of her parasol. The shot gains more oompf the farther it flies!
  *Piper shoots a single bullet from her parasol that travels very quickly. The longer the bullet travels, the more damage the bullet will inflict, so Piper is less effective against enemies near her. Piper's Attack is very slow to reload.*`)
  .addField(`**Super: Poppin's**`, `Piper hops away to avoid pushy suitors. She leaves them a lady's favor though: three live grenades from her garter!
  *When her Super is used, Piper will jump up into the air and throw 3 grenades below her that deal heavy damage to any enemies near them when they detonate.*`)
  .addField(`**Star Power: Ambush**`, `Like a viper, Piper sets up an ambush whenever she is hidden in a bush, dealing +400 damage (at max range).
    *When Piper is hidden within a bush, her main attack gains 400 bonus damage, making her already devastating shots even more deadly. The bullet also gets rainbow trail replacing the standard rings.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/5/5d/Piper_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20170706213944")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/f/f0/Piper_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174154")
message.channel.send(piper);
  return;
};

if(args[0] == "pam"){
  const pam = new Discord.RichEmbed()
  .setColor("#e100ff")
  .setTitle(`Pam`)
  .setDescription(`Pam is an Epic Brawler whose super places a device that heals nearby teammates. Her main attack shoots a burst of scrap metal in a sweeping pattern. She has high health and can deal damage in a large area.`)
  .addField(`**Attack: Scrapstorm**`, `Pam has a straightforward way of dealing with scrap metal: suck it up and blast it at the bad guys!
  *Pam shoots several pieces of scrap metal in a spread-out volley that sweeps back and forth twice, meaning that she may hit many enemies at once, but it is very inaccurate when dealing with only one enemy and does little damage, so Pam struggles to defeat Brawlers one-on-one from a distance.*`)
  .addField(`**Super: Mama's Kiss**`, `Sometimes you can get dinged up while brawling. Pam can kiss it all better with the help of her healing turret!
  *Pam's Super is a heal station that heals allies within a rather large range. The device can heal allies even if they're shooting, meaning that after it has been deployed, your teammates will probably gather around it. However, it cannot heal minions like Jessie's Scrappy, Nita's Overbearing, or another Pam's Mama's Kiss.*`)
  .addField(`**Star Power: Mama's Hug**`, `Whenever Pam hits enemies with Scrapstorm, she heals herself and nearby friendly Brawlers for 30 health.
    *Pam heals herself and nearby teammates by 30 each time a bullet of hers hits an enemy. This includes hits on an enemy Jessie's Turret, Nita's Bear, an enemy Pam's Healing Station, Tara's shadow, and buff crates in Showdown.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/6/68/Pam_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20170905025031")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/d/dc/Pam_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174021")
message.channel.send(pam);
  return;
};

if(args[0] == "frank"){
  const frank = new Discord.RichEmbed()
  .setColor("#e100ff")
  .setTitle(`Frank`)
  .setDescription(`Frank is an Epic Brawler who attacks with a large hammer, sending a wave that can hit multiple enemies. Frank also has very high health, allowing him to withstand a lot of damage. His super can stun enemies for a decent amount of time, leaving them vulnerable to attacks from him or his teammates.`)
  .addField(`**Attack: Hammer Hit**`, `Frank takes a while to wind up his hammer blow, but the hit is so hard it sends a shockwave.
  *Frank hits the floor with his hammer, sending a shockwave that can hit multiple enemies, however it takes a while for him to attack, leaving Frank vulnerable for almost half a second as he cannot move while attacking.*`)
  .addField(`**Super: Stunning Blow**`, `Frank’s greatest hit sends a shockwave that destroys environment and stuns enemies for a while.
  *Frank hits the floor with his hammer, sending a bigger shockwave that can break walls, hit multiple enemies and stun them for a moderate amount of time, rendering them useless and vulnerable. His super also stuns invulnerable Brawlers.*`)
  .addField(`**Star Power: Power Grab**`, `Frank can see and steal the power of a defeated enemy Brawler, increasing his damage by 30% for 10 seconds!
    *Frank can now see small purple skulls where other Brawlers had been defeated. Grabbing a skull will increase his damage by 30% for a total of 10 seconds. During this time, Frank can refresh Power Grab's duration if he grabs another skull.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/5/55/Frank_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20180518182616")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/6/63/Frank_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174114")
message.channel.send(frank);
  return;
};

if(args[0] == "mortis"){
  const mortis = new Discord.RichEmbed()
  .setColor("#ff4242")
  .setTitle(`Mortis`)
  .setDescription(`Mortis is a Mythic Brawler who is unique in that his Attack includes movement. He dashes forward and damages enemies that he hits. For his Super, Mortis summons a swarm of bats that drain the health of his enemies whilst restoring his own by that amount. Mortis has a moderate amount of health and damage output.`)
  .addField(`**Attack: Shovel Swing**`, `Mortis creates business opportunities for himself by dashing forward with a sharp swing of his shovel.
  *Mortis dashes forward a short distance, dealing moderate damage to any enemy Brawlers in his path. Mortis cannot perform his Attack without dashing unless he dashes toward a nearby wall. This Attack is technically a melee attack, but the dash effectively gives it a short range.*`)
  .addField(`**Super: Life Blood**`, `Mortis calls forth a swarm of vampire bats that drain the health of his enemies while restoring his. Creepy!
  *Mortis will shoot bats in a single direction. If the bats come in contact with an enemy, they deal damage and heal Mortis equal to the damage dealt. Mortis will heal the full amount possible for his level of Super even if the enemy hit has less health left than its maximum damage, but if the bats miss, Mortis does not heal. The bats have a moderate spread, move quickly, pass over walls, and travel a long distance making this a hard attack to avoid. If the bats hit multiple enemies, they deal the full damage and the heal Mortis receives is multiplied by the number of enemies hit, making it possible for Mortis to heal himself dramatically if the bats hit several enemies.*`)
  .addField(`**Star Power: Creepy Harvest**`, `Mortis can now see and reap the souls of defeated enemy Brawlers. Collecting a soul restores 1000 of his health.
    *After gaining Mortis' Star Power dead enemies now drop souls. The souls resemble green skulls and they drop at the point where the enemy brawler were defeated. Only Mortis can see these souls. Picking up a soul instantly restores 1000 health for Mortis. Restored health cannot exceed maximum HP and a soul cannot be picked up if Mortis is at full health. There is no limit how many souls there can be on the battlefield at once. The same brawler can drop multiple souls if they are defeated multiple times, even though the soul hasn't been picked up. Note only Mortis can pick up the souls; if an allied brawler walks over a soul they won't pick it up.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/b/b2/Mortis_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20181010200125")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/b/b4/Mortis_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220173653")
message.channel.send(mortis);
  return;
};

if(args[0] == "tara"){
  const tara = new Discord.RichEmbed()
  .setColor("#ff4242")
  .setTitle(`Tara`)
  .setDescription(`Tara is a Mythic Brawler who has a moderate amount of hitpoints. She attacks by throwing tarot cards that pierce through her enemies and deal each a moderate amount of damage. For her Super, she throws a special illusory card that quickly pulls in enemies within a short range, then explodes, dealing twice the damage of her normal attack.`)
  .addField(`**Attack: Triple Tarot**`, `Tara flicks her wrist, snapping off three tarot cards that pierce through enemies. Quite a trick!
  *Tara throws three tarot cards simultaneously that are able to pierce through other brawlers. This attack has a long range and a slight spread.*`)
  .addField(`**Super: Gravity**`, `Tara's greatest illusion draws her audience inexorably in. Everyone caught in the attraction will bump heads painfully!
  *Tara throws a card that becomes a black hole that attracts every enemy in a small area. After a brief moment, it will explode, dealing moderate damage to all enemies caught in the explosion.*`)
  .addField(`**Star Power: Black Portal**`, `Tara's Super cracks open a dimensional portal! A shadowy version of Tara appears and attacks her enemies.
    *When Tara uses Gravity, she summons a shadowy, smaller version of herself. This minion is similar to Nita's bear but weaker. This version of Tara has 2000 health and deals low melee damage with a fast hit speed. However, it is very fast, making it an immediate threat to enemy Brawlers.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/a/a7/Tara_Skin-Default.png/revision/latest?cb=20170905025018")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/4/49/Tara_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174044")
message.channel.send(tara);
  return;
};

if(args[0] == "spike"){
  const spike = new Discord.RichEmbed()
  .setColor("#ffd400")
  .setTitle(`Spike`)
  .setDescription(`Spike is a Legendary Brawler with low health who specializes in dealing with grouped-up enemies. His Attack and Super are both optimal for dealing with multiple enemies at once. His Attack explodes on impact and shoots spikes in all directions which deal damage to enemies they hit, and his Super slows down and deals damage to enemies caught in its area of effect.`)
  .addField(`**Attack: Needle Grenade**`, `Spike invites all seedlings to a cactus party! Enemies caught in the area take damage and get slowed down.
  *When Spike's Super is used, the area near him that he targets grows a circular patch of cacti. Enemies caught in this area take damage and have their movement speed drastically reduced until they move out of the area or the cacti disappear a few seconds after the Super is used.*`)
  .addField(`**Super: Stick Around!**`, `Spike invites all seedlings to a cactus party! Enemies caught in the area take damage and get slowed down.
  *When Spike's Super is used, the area near him that he targets grows a circular patch of cacti. Enemies caught in this area take damage and have their movement speed drastically reduced until they move out of the area or the cacti disappear a few seconds after the Super is used.*`)
  .addField(`**Star Power: Fertilize**`, `After using Super, Spike regenerates 500 health per second by staying in its area of effect.
    *Spike's star power allows him to regain health by standing in the cactus patch he creates with his Super. This can be useful for both healing Spike and damaging nearby enemies.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/8/8e/Spike_Skin-Default.png/revision/latest/scale-to-width-down/310?cb=20171111190030")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/2/22/Spike_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174004")
message.channel.send(spike);
  return;
};

if(args[0] == "crow"){
  const crow = new Discord.RichEmbed()
  .setColor("#ffd400")
  .setTitle(`Crow`)
  .setDescription(`Crow is a Legendary Brawler whose Attack throws three quick poisoned daggers in front of him that damage enemies on impact and then deal extra damage over time. He has a long range but low health. He moves slightly faster than the other brawlers.`)
  .addField(`**Attack: Knife Toss**`, `Crow throws a triple threat of poisoned daggers. Enemies nicked by these blades will take damage over time.
  *Crow throws three poisonous daggers in front of him, one straight in front of him and two on either side of that one that spread out slightly as they travel. The daggers damage enemies when they hit them and then, they deal extra damage over time equal to the amount of damage dealt by the initial impact to the target until the poison wears off after a while. The Attack has a long range, and the poison effect prevents automatic healing.*`)
  .addField(`**Super: Swoop**`, `Crow takes to the skies, throwing a ring of poisoned daggers around him both on take-off and landing.
  *Crow jumps into the air and throws several daggers radially that spread out as they travel. He then glides to his destination, and when he lands, he throws another set of daggers radially. These daggers are identical to the ones Crow uses in his main Attack.*`)
  .addField(`**Star Power: Extra Toxic**`, `Crow's poison saps the strength of enemies, causing them to do 10% less damage while the poison is active.
    *Crow's daggers gain a unique ability that decreases the damage output of a poisoned brawler. Affected brawlers not only receive poison damage, but also suffer a decrease in damage as well.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/a/a2/Crow_Skin-Default.png/revision/latest?cb=20170706213914")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/6/6f/Crow_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174416")
message.channel.send(crow);
  return;
};

if(args[0] == "leon"){
  const leon = new Discord.RichEmbed()
  .setColor("#ffd400")
  .setTitle(`Leon`)
  .setDescription(`Leon is a Legendary Brawler who can turn invisible for a short time when using his Super. He has medium health and high damage output if the enemy is close. As the blades travel, their damage is reduced. Leon has a fast movement speed as well.`)
  .addField(`**Attack: Spinner Blades**`, `Leon flicks his wrist and fires four Spinner Blades. The blades deal less damage the farther they travel.
  *He fires 4 blades in quick succession per Attack, and those shots have a long range. The damage dealt depends on how far they travel before hitting their targets. Targets close to Leon take the most Damage. Targets at a distance take far less damage. Leon also has a fair amount of range allowing him to power up his super.*`)
  .addField(`**Super: Smoke Bomb**`, `Leon's Smoke Bomb turns him invisible for 10 seconds. If he attacks while invisible, he will be revealed.
  *Leon turns himself invisible for 10 seconds. Enemy Brawlers will only be able to see him if they are within 4 tiles of him. Picking up Gem Grab gems or Showdown Power Cubes or taking damage will make him visible for a split second. Holding the Brawl Ball while invisible will make him visible too. Nita's Bear, Jessie's turret, Penny's cannon, and Tara's shadow cannot locate him while invisible. If Leon attacks while invisible, the remaining invisibility time is lost.*`)
  .addField(`**Star Power: Smoke Trail**`, `When Leon uses his Super, he gains a boost of movement speed for the duration of his invisibility.
    *After unlocking his Star Power, Leon will have an increased movement speed whenever his Super is active, allowing him to move much quicker while invisible.*`)
  .setImage("https://vignette.wikia.nocookie.net/brawlstars/images/3/33/Leon_Skin-Default.png/revision/latest?cb=20181212051917")
  .setThumbnail("https://vignette.wikia.nocookie.net/brawlstars/images/4/48/Leon_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181220174451")
message.channel.send(leon);
  return;
};

};
