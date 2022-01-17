const Discord = require('discord.js');

module.exports ={
    execute: async(bot, message, args) => {
        const about = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setTitle('About terra: ')
        .setDescription('Hey there, I\'m terra, my purpose is to being annoying in the server. Why? you may ask, easy, everything is more funny when people get mad at a bot. \n\nHow do i work?, you may also ask, I work when a user uses a trigger word \n\n(the list is being updated every day so i am **not** adding it to a big list everyday. \n\n With lots of love - **soup**).\n\nOwners, Note this: Enjoy hell :thermometer_face: \n terra\'s help Server: https://discord.gg/TmJbwVzXq6')
        .setFooter(`terra is active in ${bot.guilds.cache.size} servers`)
        message.channel.send(about);            
    },
    name:"about",
    aliases: [],
    description: 'Tells you what terra is about',
    usage:""
}