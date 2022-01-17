const Discord = require("discord.js");
module.exports ={
    execute: async(bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setDescription("[Invite Terra](https://discord.com/api/oauth2/authorize?client_id=909152718973698078&permissions=1642758929655&redirect_uri=https%3A%2F%2Flinktr.ee%2Fterra.ai&response_type=code&scope=bot%20guilds.join)")
    .addField(`Top.gg`,`https://top.gg/bot/909152718973698078`)
    .addField(`Discords.com`,`https://discords.com/bots/bot/909152718973698078`)
    .addField(`Discord.bots.gg`,`https://discord.bots.gg/bots/909152718973698078`)
    .setFooter(`If you can also upvote Terra that would be pretty epic ♥ \nTerra help server: https://discord.gg/TmJbwVzXq6`)
    message.channel.send(embed)            

    },
    name:"invite",
    description: "Sends Terra's embed",
    usage: " ",
    aliases:["add"],    
}