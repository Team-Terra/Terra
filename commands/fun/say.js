module.exports ={
    execute: async(bot, message, args) => {

    if(message.mentions.everyone) return message.reply("stop being a moron");
 
    if (args[0] === "inChannel") {
        let channel = bot.channels.cache.get(args[1])
        if(message.guild.channels.cache.get(channel)) return message.channel.send("you cannot use the say command to send messages in different guilds");
        if (!args[2]) return message.channel.send(`cannot send an empty message please provide a second argument !!`);
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            channel.send(args.slice(2).join(" "));
            return;
        } else {
            message.channel.bulkDelete(1);
            channel.send(args.slice(2).join(" "));
        }
    } else {
        if (!args[0]) return message.channel.send(`cannot send an empty message please provide a second argument !!`);
        
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send(args.slice(0).join(" "));
            return;
            
        } else {
            message.channel.bulkDelete(1);
            message.channel.send(args.slice(0).join(" "));
        }
    }            

    },
    name: "say",
    description: "says what you want Terra to say",
    usage:"` inChannel <channel ID> <message>`",
    aliases: [],    
}