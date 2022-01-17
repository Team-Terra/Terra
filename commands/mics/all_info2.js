const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../../config.json');
const owners = config.owners;
const fs = require("fs")

module.exports = {
    execute: async (bot, message, args) => {
        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
        if (!prefixes[message.guild.id]) {
            prefixes[message.guild.id] = {
                prefix: config.prefix
            }
        }
        let prefix = prefixes[message.guild.id].prefix;

        if (!message.member.hasPermission(['ADMINISTRATOR']) && !owners.includes(message.author.id)) {
            message.channel.send("You can't see that *nerd*")
        }

        else {
            const all_infoEmbed = new Discord.MessageEmbed()
                .setColor('00ffff')
                .setTitle("terra commands and trigger words: ")
                .addField('terra Prefix:', prefix,)
                .addField(`Trigger Words:`, `\`\`\`\ "hola":, "im bored": "i'm bored":  "i wanna die":"i want to die": "kill me": "k": "kk": "kkk":   "lol":  "lmfao": "lmao":"mudamuda":  "nice":  "no": " "nope": "no u":  "no you": "okay":  "ok": "oh": "omg":  "oof":  "owo":" "please stop" "pog": "pogchamp": "rigged":"secret": "server meme": "shit": "shut up":  "simp": , "sorry":  "stfu": "stfu terra": "sup":  "that's gay":  "thanks terra":  "this bot is gay":  "um": "umm": "uwu": "ugh": "wow": "whos joe": "who's joe": "xd": "yep": "yes":  "yikes": "69": , "420":  "<3":  ":)" "(:": ":(": "):": "😂": "🤣": \n\`\`\`\n**You can turn the tiggers on or off with \`${prefix} trigger off\` or \`${prefix} trigger on**\``, true)
                .addField("Commands", "\`\`\`\n Triggers | ct,cbt,trigger,pgtriggers | Moderation | kick,ban,clear | Currency | balance,beg,dailydeposit,gamble,payrob,rich,shopsell,inventory,withdraw |  | Config | blacklist,config, prefix, setMessage, setRole, setWelcome | Fun | 8ball,blackjack,cats, coinflip,cuddle,darkmeme, dance,jojodance,jojo, dogs,fact,gay, hug,kill,kiss, meme,pp,snipe, waifu,virgin, hack, math, pat, punch, slap | Misc | about,all_info,avatar, support, vote, help, uptime, ping,serverinfo, stats,userinfo,verison\n\`\`\`", true)
                .setFooter(`terra is active in ${bot.guilds.cache.size} server(s) \n terra Help Server: https://discord.gg/TmJbwVzXq6`)

            message.channel.send(all_infoEmbed);
        }

    },
    name: "all_info2",
    aliases: ["ainfo2", "allinfo2", "cheatsheet2"],
    description: 'Sends all the triggers for terra',
    usage: ""
}
