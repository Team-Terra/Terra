const Discord = require('discord.js');
const got = require("got");

module.exports ={
    execute: async(bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "ATTACH_FILES")) return;
    if (!message.guild.me.hasPermission(["SEND_MESSAGES", "ATTACH_FILES", "EMBED_LINKS"])) {
        return;
    }
    let MEME = [
        'https://www.reddit.com/r/wholesomejojo/random/.json',
        'https://www.reddit.com/r/SpeedWagon/random/.json',
        
    ]
    let ree = MEME[Math.floor(Math.random() * MEME.length)];
    const embed = new Discord.MessageEmbed()
    got(ree).then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;

        embed.setTitle(`JOJO`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(memeImage)
        embed.setColor('AQUA')
        embed.setFooter("JOJO :D")
        try {
            message.channel.send(embed);
        } catch (e) {
            return;
        }
    })            

    },
    name:"jojo",
    aliases:["wholesomeJOJO","JOJO"],    
}