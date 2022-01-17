const Color = "#207173";
const Discord = require("discord.js");

module.exports = {
  execute: async(bot, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!Member) return message.channel.send("Please mention the person or give me their id to slap them, thanks");
   
    const Other = args.slice(1).join(" ") || "*slaps ass*";
    if (Other.length > 50) return message.channel.send("Characters Limit Reached - 50!");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/batmanslap?text1=ouch daddy&text2=${Other}&batman=${message.author.avatarURL({ format: "png" })}&robin=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);


},
    name:"slap",
    description:"slap someone lol",
    aliases:["batmanslap", "slp", "slappy"],    
}