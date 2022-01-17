const Discord = require('discord.js');

module.exports ={
    execute: async(bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }
    const user = message.mentions.users.first();
    let gifs = [
        "https://c.tenor.com/svNEvYEag3QAAAAC/pat-anime-pat.gif",
        "https://c.tenor.com/BI5IrlWrkTMAAAAd/bunny-too-cute.gif",
        "https://c.tenor.com/7lSNoSmQV-UAAAAC/funny-dog.gif",
        "https://c.tenor.com/ujy_xmrW-bMAAAAd/pat-dog.gif",
        "https://c.tenor.com/f5asRSsfl-wAAAAC/good-boy-pat-on-head.gif",
        "https://c.tenor.com/BMejCjtrWs0AAAAC/pat-good-boy.gif",
    ]
    let pick = gifs[Math.floor(Math.random() * gifs.length)];


    if(!user){
        let embed = new Discord.MessageEmbed()
        .setColor('ed61a5')
        .setTitle(`look here ${message.author.username} have to ping someone to pat them, if you have no one well um *pats* :flushed:`)
        .setImage(pick)
        message.channel.send(embed)
    }else{
        let embed = new Discord.MessageEmbed()
        .setColor('ed61a5')
        .setTitle(`${message.author.username} pats ${user.username}`)
        .setImage(pick)
       message.channel.send(embed)    
    }            

    },
    name: "pat",
    description: "Sends a pat gif",
    usage: " <user>",
    aliases: ["pat_user"]      
}