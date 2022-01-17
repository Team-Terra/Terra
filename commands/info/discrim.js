const Discord = require("discord.js")
module.exports ={
    execute: async(bot, message, args) => {
    /*global.discrim = args.length ? args[0] : message.author.discriminator;
    const users = bot.shard.broadcastEval(`this.users.cache.filter(u =>u.discriminator === global.discrim).map(u=> u.tag)`)
    */

    const discrim = args.length ? args[0] : message.author.discriminator;
    let users = bot.users.cache.filter(u =>u.discriminator === discrim).map(u=> u.tag);
    if(!users || !users.length){
        return message.channel.send(`I couldn't find any results for ${discrim}`);
    }
    users = users.slice(0, 10)

    const embed = new Discord.MessageEmbed()
    .setColor("00ffff")
    .setTitle("Disciminators")
    .setDescription(`${users.join('\n')}`)
    return message.channel.send(embed)            

    },
    name:"discrim",
    aliases: ["disciminator", "dis", "BIGD"],
    description: '',
    usage:""
}