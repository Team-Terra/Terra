const Discord = require("discord.js");
module.exports ={
    execute: async(bot, message, args)=>{
        const embed = new Discord.MessageEmbed()
        .setColor(0x00ffff)
        .setDescription(`Member Count\n${message.guild.memberCount}`)
        message.channel.send(embed)
    },
    name:"memberCount",
    description:"look up the server's member count",
    aliases:["mc", "membercount"]
}