const Discord = require('discord.js');

module.exports ={
    execute: async(bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }
    const user = message.mentions.users.first();
    let gifs = [
        "https://c.tenor.com/Io4G6owWrbcAAAAC/throat-punch-identity-thief.gif",
        "https://c.tenor.com/IwSax2YP68YAAAAC/punch-dwarf.gif",
        "https://c.tenor.com/szPtb6lqakIAAAAC/beating-up-beating-up-lilo.gif",
        "https://c.tenor.com/7JVff7vMCVkAAAAC/face-punch-punch.gif",
        "https://c.tenor.com/sN9Q0TNmHqQAAAAd/fighting-punch.gif",
        "https://c.tenor.com/gIaioChTOloAAAAC/cat-cute.gif",
        "https://c.tenor.com/_DOU2Mi1TG0AAAAC/dean-winchester-punch.gif",
        "https://c.tenor.com/5m4TyjWHSdQAAAAC/punch-in-the-face-surprise.gif",
        "https://c.tenor.com/UlL4v-hsjVEAAAAC/punch-anna.gif",
        "https://c.tenor.com/ZwjudWL5JxYAAAAC/kirby-punch.gif",
        "https://c.tenor.com/A0GjkLEubOcAAAAC/cute-cute-couple.gif",
        "https://c.tenor.com/QwWlh6LwjmwAAAAd/punch-damon.gif",
        "https://c.tenor.com/f449A8g8_8kAAAAd/the-three.gif",
        "https://c.tenor.com/HuPsWLoQmgsAAAAC/twinuzis-autumn.gif",
    ]
    let pick = gifs[Math.floor(Math.random() * gifs.length)];


    if(!user){
        let embed = new Discord.MessageEmbed()
        .setColor('ed61a5')
        .setTitle(`look here ${message.author.username} have to ping someone to punch them, if you have no one well um *punches* :flushed:`)
        .setImage(pick)
        message.channel.send(embed)
    }else{
        let embed = new Discord.MessageEmbed()
        .setColor('ed61a5')
        .setTitle(`${message.author.username} punches ${user.username}`)
        .setImage(pick)
       message.channel.send(embed)    
    }            

    },
    name: "punch",
    description: "Sends a punch gif",
    usage: " <user>",
    aliases: ["punch_user"]      
}