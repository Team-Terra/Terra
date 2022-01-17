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
                .addField(`Trigger Words:`, `\`\`\`\ "soup":"cum":""epic":"fuck":"terra":,   "hello":   "humans":"   "idk":   "ik":   "idiot":   "lol":   "nani":   "noice":   "pog":"poggers":"   "pogchamp":"   "stop":   "sup":   "sus":   "vibe":   "weeb":   "what": "awww": " "kys": " "kill yourself":  "asshole": "brain power": "bruh":  "bitch": "bye": "cat": "cats":"daddy": "damnit": "epic":, "even more rigged": "fuck": "fuck me": " "fuck off":  "fuck you":  "gay":  "good morning": "hey":  "hello":  "hello there":  "hey terra": "hi":  "hi terra": \n\`\`\`\n**You can turn the tiggers on or off with \`${prefix} trigger off\` or \`${prefix} trigger on**\``, true)
                .addField("Commands", "\`\`\`\n Triggers | ct,cbt,trigger,pgtriggers | Moderation | kick,ban,clear | Currency | balance,beg,dailydeposit,gamble,payrob,rich,shopsell,inventory,withdraw |  | Config | blacklist,config, prefix, setMessage, setRole, setWelcome | Fun | 8ball,blackjack,cats, coinflip,cuddle,darkmeme, dance,jojodance,jojo, dogs,fact,gay, hug,kill,kiss, meme,pp,snipe, waifu,virgin, hack, math, pat, punch, slap | Misc | about,all_info,avatar, support, vote, help, uptime, ping,serverinfo, stats,userinfo,verison\n\`\`\`", true)
                .setFooter(`terra is active in ${bot.guilds.cache.size} server(s) \n terra Help Server: https://discord.gg/TmJbwVzXq6 \n .ainfo2 for more info`)

            message.channel.send(all_infoEmbed);
        }

    },
    name: "all_info",
    aliases: ["ainfo", "allinfo", "cheatsheet"],
    description: 'Sends all the triggers for terra',
    usage: ""
}