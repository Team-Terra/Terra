const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("../../config.json");
const owners = config.owners;

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Profile = require("../../models/profile.js");//models

module.exports ={
    execute: async(bot, message, args) => {

        if (!owners.includes(message.author.id)) return message.reply("you cannot use this command");

        else {
            let user = message.mentions.members.first() || bot.users.cache.get(args[1]);
            if (!user) return message.reply("oof, I couldn't find that user!");

            Profile.findOne({
                userID: user.id
            }, (err, profile) => {
                if (err) console.log(err);

                if (!args[0]) return message.reply(`I cant pay ${user} nothing, specify the amount you want to pay`);
                if (args[0] != Math.floor(args[0])) return message.reply("Enter only numbers!");
                if (args[0] === " ") return message.reply("Enter the amount you want to pay")

                if (!profile) {
                    const newProfile = new Profile({
                        guildID: message.guild.id,
                        name: bot.users.cache.get(user.id).username,
                        userID: user.id,
                        lb: "all",
                        money: parseInt(args[0]),
                        bank: 0,
                        daily: 0,
                        rob: 0,
                        inventory:[],

                    })
                    newProfile.save().catch(err => console.log(err));

                } else {
                    profile.money += parseInt(args[0]);
                    profile.save().catch(err => console.log(err));
                }
                const embed = new Discord.MessageEmbed()
                    .setColor("AQUA")
                    .setTitle("Owner Pay")
                    .setDescription(`soup just gave \`${args[0]} soup  dollars\` to ${bot.users.cache.get(user.id)}`)
                return message.channel.send(embed);
            })
        }            

    },
    name: "ownerpay",
    description: "Pays soup dollars to a user",
    usage: " <amount> <user>",
    aliases: ["ap", "op",]    
}