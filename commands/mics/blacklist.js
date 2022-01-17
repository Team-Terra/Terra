const Discord = require("discord.js")
const config = require("../../config.json")
let owners = config.owners;
const db = require("quick.db")

module.exports ={
    execute: async(bot, message, args) => {
    if (!owners.includes(message.author.id)) return message.reply("you do not have permission to use this command!")
    const user = message.mentions.users.first()
    if (!user) return message.reply("Please mention someone!")

    let blacklist = await db.fetch(`blacklist_${user.id}`)

    if (blacklist === "Not") {
        db.set(`blacklist_${user.id}`, "Blacklisted")
        let embed = new Discord.MessageEmbed()
            .setColor("00ffff")
            .setDescription(`${user} has been blacklisted!`)

        message.channel.send(embed)
    } else if (blacklist === "Blacklisted") {
        db.set(`blacklist_${user.id}`, "Not")
        let embed = new Discord.MessageEmbed()
            .setColor("00ffff")
            .setDescription(`${user} has been unblacklisted!`)

        message.channel.send(embed)
    } else {
        db.set(`blacklist_${user.id}`, "Not")
        let embed = new Discord.MessageEmbed()
            .setColor("00ffff")
            .setDescription(`${user.username} has been saved in data!`)

        message.channel.send(embed)
    }            

    },
    name:"blacklist",
    aliases: ["bl"],
    description: '',
    usage:""
}