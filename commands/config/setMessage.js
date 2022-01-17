const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json");
const owners = config.owners;

module.exports ={
    execute: async(bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS") && !owners.includes(message.author.id)){
        return message.reply("You need manage channel permission");
    }
    const  member =  message.member
    let msg = args.join(" ");

    if(!msg) return;
    if (msg) {
        db.set(`welcomemsg${member.guild.id}`, msg);
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("AQUA")
            .setDescription(`The welcome message has been set to \`${msg}\``)
        );
    }else{
        message.channel.send("Please enter a welcome message")
    }            

    },
    name: "setMessage",
    description:"sets a welcome message",
    usage:" <welcome message>",
    aliases: ["setmsg","setmessage"]    
}