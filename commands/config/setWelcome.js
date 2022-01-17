const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json");
const owners = config.owners;

module.exports ={
    execute: async(bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES") && !owners.includes(message.author.id)){
        return message.reply("You need manage channels permission");
    }
    const  member =  message.member
    if(!args[0]) return message.channel.send("Please mention a channel");
    let ree = member.guild.channels.cache.find(ch => ch.name === args[0]) || message.mentions.channels.first();
    if(!ree) return message.channel.send("Please mention a channel");
    ree = ree.id
    
    if (ree) {
        db.set(`welcome${member.guild.id}`, ree);
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("AQUA")
            .setDescription(`The welcome channel has been set to <#${ree}>`)
        );
    }else{
        message.channel.send("Please mention a channel")
    }            

    },
    name: "setWelcome",
    description:"set a welcome channel where terra will send a message when a user joins the guild",
    usage:" <channel>",
    aliases: ["setwelcome","welcome"]    
}