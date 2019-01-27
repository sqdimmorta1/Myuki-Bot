const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

//page 1

if(!args[0] || args[0] == 1) {
  const help1 = new Discord.RichEmbed()
  .setColor("#170041")
  .setTitle(`Myuki commands`)
  .setDescription(`[Support Server](https://discord.gg/jgcBtja) | [Patreon](https://www.patreon.com/sqdimmorta1) | [Invite](https://discordapp.com/oauth2/authorize?client_id=498442154226745365&scope=bot&permissions=2146958847)`)
  .setThumbnail("https://i.imgur.com/7ZSa4Nm.png")
  .setFooter(`Type $help <command> to view more help`)
  .addField(`:gear: Default:`, `\`\`\`asciidoc\n\= whois, guildinfo, roleinfo, about, pc, foundation, ping, calc\`\`\``)
  .addField(`:hammer: Moderator:`, `\`\`\`diff\n\- purge, warn, mute, unmute, kick, ban, addrole, delrole, report, bug, r, eval, eval2, d200, d300, an1, botz\`\`\``)
  .addField(`:tada: Fun:`, `\`\`\`css\nslap, flex, hug, say, avatar, cat, dog, fakeban, joke, rps, ascii, qrcode, emoji, cow, work, pickle, fap, 8ball\`\`\``)
  .addField(`:notepad_spiral: Other:`, `\`\`\`prolog\n\' devs, invite, nsfw\`\`\``);
          message.channel.send(help1);
return;
}

                    //page userinfo
                    if(args[0] == "user"){
                      const help5 = new Discord.RichEmbed()
                      .setColor("#170041")
                      .setTitle(`Help $user`)
                      .setFooter(`Type $user <user> to use | Type $help view other commands`)
                      .addField(":gear: Default command", "Display user's info")
                    message.channel.send(help5);
                      return;
                    };
                    //page userinfo
                    if(args[0] == "guildinfo"){
                      const help6 = new Discord.RichEmbed()
                      .setColor("#170041")
                      .setTitle(`Help $guildinfo`)
                      .setFooter(`Type $guildinfo to use | Type $help view other commands`)
                      .addField(":gear: Default command", "Display guild's info")
                    message.channel.send(help6);
                      return;
                    };
                                                            //page 4
                                                            //page userinfo
                                                            if(args[0] == "about"){
                                                              const help7 = new Discord.RichEmbed()
                                                              .setColor("#170041")
                                                              .setTitle(`Help $about`)
                                                              .setFooter(`Type $about to use | Type $help view other commands`)
                                                              .addField(":gear: Default command", "Display Myuki's info")
                                                            message.channel.send(help7);
                                                              return;
                                                            };
                                                            //page userinfo
                                                            if(args[0] == "foundation"){
                                                              const help8 = new Discord.RichEmbed()
                                                              .setColor("#170041")
                                                              .setTitle(`Help $foundation`)
                                                              .setFooter(`Type $foundation to use | Type $help view other commands`)
                                                              .addField(":gear: Default command", "Display Myuki's foundation")
                                                            message.channel.send(help8);
                                                              return;
                                                            };
                                                            //page 4
                                                            //page userinfo
                                                            if(args[0] == "ping"){
                                                              const help9 = new Discord.RichEmbed()
                                                              .setColor("#170041")
                                                              .setTitle(`Help $ping`)
                                                              .setFooter(`Type $ping to use | Type $help view other commands`)
                                                              .addField(":gear: Default command", "Display Myuki's ping")
                                                            message.channel.send(help9);
                                                              return;
                                                            };
                                                            //page userinfo
                                                            if(args[0] == "bug"){
                                                              const help0 = new Discord.RichEmbed()
                                                              .setColor("#ff3200")
                                                              .setTitle(`Help $user`)
                                                              .setFooter(`Type $bug @Myuki#0068 <bug> to use | Type $help view other commands`)
                                                              .addField(":hammer: Moderator command", "Reports Myuki's bugs")
                                                            message.channel.send(help0);
                                                              return;
                                                            };
                                                            //page 4
                                                            if(args[0] == "report"){
                                                              const help0 = new Discord.RichEmbed()
                                                              .setColor("#ff3200")
                                                              .setTitle(`Help $report`)
                                                              .setFooter(`Type $report <user> <reason> to use | Type $help view other commands`)
                                                              .addField(":hammer: Moderator command", "Reports user")
                                                            message.channel.send(help10);
                                                              return;
                                                            };
                                                            if(args[0] == "purge"){
                                                              const help0 = new Discord.RichEmbed()
                                                              .setColor("#ff3200")
                                                              .setTitle(`Help $purge`)
                                                              .setFooter(`Type $purge <count messages to delete> to use | Type $help view other commands`)
                                                              .addField(":hammer: Moderator command", "Deletes messages")
                                                            message.channel.send(help11);
                                                              return;
                                                            };
                                                            //page 4
                                                            if(args[0] == "mute"){
                                                              const help10 = new Discord.RichEmbed()
                                                              .setColor("#ff3200")
                                                              .setTitle(`Help $mute`)
                                                              .setFooter(`Type $mute <user> <time> <reason> to use | Type $help view other commands`)
                                                              .addField(":hammer: Moderator command", "Mutes member")
                                                            message.channel.send(help10);
                                                              return;
                                                            };
                                                            if(args[0] == "unmute"){
                                                              const help11 = new Discord.RichEmbed()
                                                              .setColor("#ff3200")
                                                              .setTitle(`Help $unmute`)
                                                              .setFooter(`Type $unmute <user> to use | Type $help view other commands`)
                                                              .addField(":hammer: Moderator command", "Unmutes member")
                                                            message.channel.send(help11);
                                                              return;
                                                            };
                                                            //page 4
                                                            if(args[0] == "kick"){
                                                              const help12 = new Discord.RichEmbed()
                                                              .setColor("#ff3200")
                                                              .setTitle(`Help $kick`)
                                                              .setFooter(`Type $kick <user> <reason> to use | Type $help view other commands`)
                                                              .addField(":hammer: Moderator command", "Kicks member from guild")
                                                            message.channel.send(help12);
                                                              return;
                                                            };
                                                            if(args[0] == "ban"){
                                                              const help13 = new Discord.RichEmbed()
                                                              .setColor("#ff3200")
                                                              .setTitle(`Help $ban`)
                                                              .setFooter(`Type $ban <user> <reason> to use | Type $help view other commands`)
                                                              .addField(":hammer: Moderator command", "Bans member from guild")
                                                            message.channel.send(help13);
                                                              return;
                                                            };
                                                            //page 4
                                                            if(args[0] == "slap"){
                                                              const help14 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $slap`)
                                                              .setFooter(`Type $slap <user> to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "Slaps member")
                                                            message.channel.send(help14);
                                                              return;
                                                            };
                                                            if(args[0] == "flex"){
                                                              const help15 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $flex`)
                                                              .setFooter(`Type $flex <user> to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "Flexs with member")
                                                            message.channel.send(help15);
                                                              return;
                                                            };
                                                            //page 4
                                                            if(args[0] == "hug"){
                                                              const help16 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $hug`)
                                                              .setFooter(`Type $hug <user> to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "Hugs member")
                                                            message.channel.send(help16);
                                                              return;
                                                            };

                                                            if(args[0] == "say"){
                                                              const help17 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $say`)
                                                              .setFooter(`Type $say <message to say> to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "Bot says your message")
                                                            message.channel.send(help17);
                                                              return;
                                                            };

                                                            if(args[0] == "avatar"){
                                                              const help18 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $avatar`)
                                                              .setFooter(`Type $avatar <user> to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "View member's avatar")
                                                            message.channel.send(help18);
                                                              return;
                                                            };

                                                            if(args[0] == "cat"){
                                                              const help19 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $cat`)
                                                              .setFooter(`Type $cat to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "Sends random cat's photo")
                                                            message.channel.send(help19);
                                                              return;
                                                            };

                                                            if(args[0] == "dog"){
                                                              const help20 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $dog`)
                                                              .setFooter(`Type $dog to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "Sends random dog's photo")
                                                            message.channel.send(help20);
                                                              return;
                                                            };

                                                            if(args[0] == "fakeban"){
                                                              const help21 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $fakeban`)
                                                              .setFooter(`Type $fakeban <user> to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "Bans member from your mind")
                                                            message.channel.send(help21);
                                                              return;
                                                            };

                                                            if(args[0] == "joke"){
                                                              const help22 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $joke`)
                                                              .setFooter(`Type $joke to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "Sends random joke")
                                                            message.channel.send(help22);
                                                              return;
                                                            };

                                                            if(args[0] == "rps"){
                                                              const help23 = new Discord.RichEmbed()
                                                              .setColor("#d442f4")
                                                              .setTitle(`Help $rps`)
                                                              .setFooter(`Type $rps <rock/paper/scissors> to use | Type $help view other commands`)
                                                              .addField(":tada: Fun command", "Bot play with you")
                                                            message.channel.send(help23);
                                                              return;
                                                            };
                                                            if(args[0] == "devs"){
                                                              const help25 = new Discord.RichEmbed()
                                                              .setColor("#41bef4")
                                                              .setTitle(`Help $devs`)
                                                              .setFooter(`Type $devs to use | Type $help view other commands`)
                                                              .addField(":notepad_spiral: Other commands", "View Myuki's developers")
                                                            message.channel.send(help25);
                                                              return;
                                                            };
                                                            if(args[0] == "invite"){
                                                              const help26 = new Discord.RichEmbed()
                                                              .setColor("#41bef4")
                                                              .setTitle(`Help $invite`)
                                                              .setFooter(`Type $invite to use | Type $help view other commands`)
                                                              .addField(":notepad_spiral: Other commands", "Sends links to invite Myuki")
                                                            message.channel.send(help26);
                                                              return;
                                                            };
                                                            if(args[0] == "nsfw"){
                                                              const help27 = new Discord.RichEmbed()
                                                              .setColor("#41bef4")
                                                              .setTitle(`Help $nsfw`)
                                                              .setFooter(`Type $nsfw to use | Type $help view other commands`)
                                                              .addField(":notepad_spiral: Other commands", "Sends 18+")
                                                            message.channel.send(help27);
                                                              return;
                                                            };
                    if(args[0] == "adm"){
                      const help27 = new Discord.RichEmbed()
                      .setColor("#170041")
                      .setTitle(`Admin help panel`)
                      .setDescription(`[Support Server](https://discord.gg/jgcBtja) | [Patreon](https://www.patreon.com/sqdimmorta1) | [Invite](https://discordapp.com/oauth2/authorize?client_id=498442154226745365&scope=bot&permissions=2146958847)`)
                      .setThumbnail("https://i.imgur.com/7ZSa4Nm.png")
                      .setFooter(`This commands can use only bot's developer`)
                      .addField(`ﾠ`, `:warning: Admin: **eval, botz, r, d200, d300**`)
                    message.channel.send(help27);
                      return;
                    };



                  }
