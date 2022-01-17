const Discord = require('discord.js');

module.exports ={
    execute: async(bot, message, args) => {
        const creditEmbed = new Discord.MessageEmbed()
        .setColor('00ffff')
        .setTitle('CREDITS: ')
        .setDescription("written and coded by: <@590457676383911936>")
        .addField("Created On:","`November 13th, 2021`")
        message.channel.send(creditEmbed);             
    },
    name:"credits",
    aliases: ["author","dev","developer"],
    description: 'Sends terra credit',
    usage:""
}