const config= require("../../config.json");
let owners = config.owners;
module.exports ={
    execute: async(bot, message, args) => {
        if (!owners.includes(message.author.id)) return message.channel.send("You're not the bot owner!")
        if (!args[0]) return message.channel.send("Please provide a command to reload!")

        let cmdDir = args[0].toLowerCase()
        let commandName = args[1].toLowerCase()

        try {
            delete require.cache[require.resolve(`../${cmdDir}/${commandName}.js`)] // usage .reload <name>
            bot.commands.delete(commandName)
            const pull = require(`../${cmdDir}/${commandName}.js`)
            bot.commands.set(commandName, pull)
        } catch (e) {
            return message.channel.send(`Could not reload: \`${args[1].toUpperCase()}\``)
        }

        message.channel.send(`The command \`${args[1].toUpperCase()}\` has been reloaded!`);           
    },
    name: "reload",
    aliases: ["ree"],
    description: "reloads a bot command!",
    usage: "<command dir> <command name>",    
}