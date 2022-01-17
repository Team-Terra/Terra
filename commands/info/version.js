const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("../../config.json");

module.exports ={
    execute: async(bot, message, args) => {
    const versionEmbed = new Discord.MessageEmbed()
    .setColor('AQUA')
    .setTitle("Version")
    .setDescription('Version: '+ config.version)
    .setTimestamp()
    message.channel.send(versionEmbed);               

    },
    name:"version",
    description:"shows what version Terra's in ",
    aliases:[],    
}


