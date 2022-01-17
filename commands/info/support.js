const Discord = require("discord.js");
module.exports ={
    execute: async(bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setDescription("Terra help server: https://discord.gg/TmJbwVzXq6")
    message.channel.send(embed)            

    },

   name: "support",
    description: "Sends Terra's support thing",  
}