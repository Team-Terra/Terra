const Discord = require("discord.js")
const ms = require('pretty-ms');
module.exports ={
    execute: async(bot, message, args) => {



      message.channel.send(new Discord.MessageEmbed()
            .setColor('AQUA')
            .setTitle(`Terra statistics`)
            .setDescription(`Terra version: 1.8\nInvite: [click me](https://discord.com/api/oauth2/authorize?client_id=909152718973698078&permissions=1642758929655&redirect_uri=https%3A%2F%2Flinktr.ee%2Fterra.ai&response_type=code&scope=bot%20guilds.join)\nSupport Server: [Terra help server](https://discord.gg/TmJbwVzXq6)\nServers: ${bot.guilds.cache.size}\nUsers: ${bot.users.cache.size}\nChannels: ${bot.channels.cache.size}\nNode: v14.18.0`)
            .addField('Uptime', `${ms(bot.uptime)}`, true)
            .addField('Ping', `${bot.ws.ping}ms`, true)
            .addField('Usage', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`, true)
            .addField('Server Count', `${bot.guilds.cache.size} guilds`, true)
            .addField('Commands', `${bot.commands.size} commands`,true)
            .setFooter(`Thanks for using Terra !`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
        );
    
    }



,


    name: "stats",
    description: "stats",
    aliases: [],    
}
