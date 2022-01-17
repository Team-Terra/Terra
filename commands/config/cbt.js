const Discord = require("discord.js");
const cbt = require("../../models/cbt.js");
const config = require("../../config.json");
const owners = config.owners;

module.exports = {
    execute: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD") && !owners.includes(message.author.id)) return message.reply("You need `Manage Guild` permission to `view`, `delete` or `set` **C**ustom **B**etter**T**riggers:tm:");
        if(!args[0]) return message.channel.send("please use `set`/`view`/`delete`")
        if (args[0].toLowerCase() === "view") {
            cbt.find({ Guild: message.guild.id }).exec((err, res) => {
                if (err) console.log(err);
                var page = Math.ceil(res.length / 4);
                let embed = new Discord.MessageEmbed()
                    .setColor("00ffff")
                    .setTitle("**C**ustom **B**etter**T**riggers:tm:")

                if (res.length === 0) {
                    embed.setColor("RED");
                    embed.addField("No data found", "This guild does not have any **C**ustom **B**etter**T**riggers:tm: yet");
                }

                let pg = parseInt(args[1]);
                if (pg != Math.floor(pg)) pg = 1;
                if (!pg) pg = 1;
                let end = pg * 4;
                let start = (pg * 4) - 4;

                if (res.length === 0) {
                    embed.addField("Error", "No pages found!");
                }
                else if (res.length <= start) {
                    embed.addField("Error", "Page not found!");
                }
                else if (res.length <= end) {
                    embed.setFooter(`page ${pg} of ${page}`);
                    for (i = start; i < res.length; i++) {
                        embed.addField(`${i + 1}. ${res[i].Trigger}`, `${res[i].Reply}`);
                    }
                }
                else {
                    embed.setFooter(`page ${pg} of ${page}`);
                    for (i = start; i < end; i++) {
                        embed.addField(`${i + 1}. ${res[i].Trigger}`, `${res[i].Reply}`);
                    }
                }
                message.channel.send(embed);
            })
        }

        else if (args[0].toLowerCase() === "delete") {
            if (!args[1]) return message.channel.send("Provide the **C**ustom **B**etter**T**rigger:tm: you want to delete");
            cbt.findOne({
                Trigger: args[1], Guild: message.guild.id
            },
                async (err, data) => {
                    if (err) throw err;
                    if (!data) return message.channel.send("This is not a **C**ustom **B**etter**T**rigger:tm:");
                    cbt.findOneAndDelete({ Trigger: args[1], Guild: message.guild.id },
                        (err) => {
                            if (err) throw err;
                        }
                    );
                    return message.channel.send(`Successfully deleted the **C**ustom **B**etter**T**rigger:tm: \`${args[1]}\``);
                }
            )
        }

        else if (args[0].toLowerCase() === "set") {
            if (!args[1]) return message.channel.send(`Please specify a name for the **C**ustom **B**etter**T**rigger:tm:`);

            let name = args[1].toLowerCase();
            if (!args.slice(2).join(" ")) return message.channel.send("Please specify reply for the **C**ustom **B**etter**T**rigger:tm:");

            cbt.findOne(
                { Guild: message.guild.id, Trigger: name },
                async (err, data) => {
                    if (err) throw err;
                    if (data) {
                        data.Reply = args.slice(2).join(" ");
                        data.save();

                        message.channel.send(`Trigger: ${name}\nNew Reply: ${args.slice(2).join(" ")}`);
                    } else if (!data) {
                        let newData = new cbt({
                            Guild: message.guild.id,
                            Trigger: name,
                            Reply: args.slice(2).join(" ")
                        });
                        newData.save();
                        message.channel.send(`Trigger: ${name}\nReply: ${args.slice(2).join(" ")}`);
                    }
                }
            )
        }

        else {
            return message.reply("Please only use `set`, `view` or `delete` for the **C**ustom **B**etter**T**rigger:tm:");
        }
    },
    name: "cbt",
    aliases: ["custombettertriggers", "custombettertrigger"],
    description: "set, delete or view Custom BetterTriggers",
    uage: "<set/delete/view> <Trigger> <Reply>"
}