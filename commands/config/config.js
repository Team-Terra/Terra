const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json");
const owners = config.owners;

module.exports ={
    execute: async(bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD") && !owners.includes(message.author.id)) {
            return message.reply("You need manage guild permission");
        }
        const  member =  message.member
        let owo = db.fetch(`welcome${member.guild.id}`)
        let uwu = db.fetch(`role${member.guild.id}`)
        let pwp = db.fetch(`welcomemsg${member.guild.id}`)
        if(!owo) owo = `\`NOT SET\``;
        if(!uwu) uwu = `\`NOT SET\``;
        if(!pwp) pwp = `\`NOT SET\``;
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("AQUA")
            .setTitle("Welcome Channel And Role Config")
            .addField("Welcome Channel", `<#${owo}>`)
            .addField("Default Member Role", `<@&${uwu}>`)
            .addField("Welcome Message", `\`${pwp}\``)
            .setFooter("see config commands on how to set up welcome messages")
        );
            

    },
    name:"config",
    aliases: ["welcomeconfig", "configuration"],
    description: 'Config the server',
    usage:""
}