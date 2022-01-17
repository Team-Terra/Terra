const Discord = require("discord.js");
module.exports ={
    execute: async(bot, message, args) => {
        let HT = [
            "Heads",
            "Tails"
        ]
        let pick = HT[Math.floor(Math.random() * HT.length)];

        if(pick === "Tails"){
            const embed = new Discord.MessageEmbed()
            .setColor('207173')
            .setTitle('Coinflip')
            .setImage('https://anthrowear.com/wp-content/uploads/2019/02/20140627_171238-1200x1200.jpg')
            .setDescription('Tails')
            message.channel.startTyping()
            message.channel.stopTyping(true)
            await 5; message.channel.send(embed)
        }else{
            const embed = new Discord.MessageEmbed()
            .setColor('207173')
            .setTitle('Coinflip')
            .setImage('https://i.pinimg.com/originals/9a/ae/52/9aae521c2fc5960d0e4dfbb5a1bf09dc.jpg')
            .setDescription('Heads')
            message.channel.startTyping()
            message.channel.stopTyping(true)
            await 5; message.channel.send(embed)
        }            
    },
    name:"coinflip",
    aliases: ["cf"],
    description: 'Flips a coin',
    usage:""
}