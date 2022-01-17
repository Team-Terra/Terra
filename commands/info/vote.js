const Discord = require("discord.js");
module.exports ={
    execute: async(bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setTitle(`Vote for Terra`)
    .setDescription(`Want to support Terra? If you do, then please click these links and upvote the bot so more people can get to Terra and grow our community! If you dont want to support Terra, its fine <33`)
    .addField(`Vote for Terra on top.gg`,`https://top.gg/bot/909152718973698078`)
    .addField(`Vote for Terra on discords.com`,`https://discords.com/bots/bot/909152718973698078`)
    .addField(`Vote for Terra on discord.bots.gg`,`https://discord.bots.gg/bots/909152718973698078`)
    .setTimestamp(message.timestamp = Date.now())
    .setFooter(`If you can also upvote Terra that would be pretty epic ♥ \nTerra help server: https://discord.gg/TmJbwVzXq6`)

    message.channel.send(embed)            

    },

   name: "vote",
    description: "Sends Terra's vote thing",  
}