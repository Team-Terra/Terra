const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json");
const owners = config.owners;

module.exports ={
    execute: async(bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR") && !owners.includes(message.author.id)){
        return message.reply("You need admin permission");
    }
    const  member =  message.member
    if(!args[0]) return message.channel.send("Please mention a role");
    let reee = member.guild.roles.cache.find(r => r.name === args[0]) || message.mentions.roles.first();
    if(!reee) return message.channel.send("Please mention a role");
    reee = reee.id

    if (reee) {
        db.set(`role${member.guild.id}`, reee);
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("AQUA")
            .setDescription(`The default member role has been set to <@&${reee}>`)
        );
    }else{
        message.channel.send("Please mention a role")
    }            

    },
    name: "setRole",
    description:"Gives a user a default role upon joining the guild",
    usage:" <role>",
    aliases: ["setrole","role"]    
}