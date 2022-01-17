const Discord = require("discord.js");
const db = require("quick.db");
module.exports ={
    execute: async(bot, message, args) => {
    if (!args[0]) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor("AQUA")
                .setDescription("Triggers are now pg, have fun !")
        );
        db.set(`triggerrr_${message.guild.id}`, "pg");
    } else if (args[0] === "off") {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor("AQUA")
                .setDescription("PG triggers are now off, enjoy you bitches")
        );
        db.set(`triggerrr_${message.guild.id}`, "off");
    } else {
        return message.reply("eek")
    }
            

    },
    name: "pgtriggers",
    description: "makes the triggers pg, no more swearing",
    usage: " (off)",
    aliases: ["pgt", "PGT", "pgT"]    
}