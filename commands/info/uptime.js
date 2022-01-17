const Discord = require("discord.js")
const ms = require('pretty-ms');
module.exports ={
    execute: async(bot, message, args) => {



      message.channel.send(new Discord.MessageEmbed()
            .setColor('AQUA')
            .setFooter(`Thanks for using Terra !`)
            .setDescription(`\n\nUptime: **${ms(bot.uptime)}**`)
        );
    
    }


,

 name: "uptime",
  description: "Shows  Uptime.",
  usage: "uptime",
  }

