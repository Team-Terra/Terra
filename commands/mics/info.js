const Discord = require('discord.js');

module.exports ={
    execute: async(bot, message, args) => {
        const info = new Discord.MessageEmbed()
       .setColor('48bdbd')
        .setTitle(`Terra help`)
        .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
        .setDescription('Who is Terra? The best chat bot and other purpose bot on discord.')
        .setURL('https://discord.gg/TmJbwVzXq6')
        .addField(`Prefix:`, "`.`")
        .addField(`Support`, `[Terra help server](https://discord.gg/TmJbwVzXq6)`)
        .addField(`Invite link`, `[invite](https://discord.com/api/oauth2/authorize?client_id=909152718973698078&permissions=1642758929655&redirect_uri=https%3A%2F%2Flinktr.ee%2Fterra.ai&response_type=code&scope=bot%20guilds.join)`)
        .addField(`GitHub`, `[bad code here](https://github.com/soupykid)`)
        .addField(`Commands list`, `.help for the commands list`)
        message.channel.send(info);            
    },
    name:"info",
    aliases: [],
    description: 'info about Terra',
    usage:""
}