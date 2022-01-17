const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `#207173`;

module.exports = {
    execute: async(bot, message, args) => {
 
    try {
      if (!args[0]) return message.channel.send("Please Give Me Equation!");

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Result`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Please Give Me Valid Equation | Try Again Later!`).then(() => console.log(error));
    }
  


},
    name:"math",
    description:"",
    aliases:[],    
}