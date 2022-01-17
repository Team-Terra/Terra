const Discord = require("discord.js");
const custom = require("../../models/custom.js");
const config = require("../../config.json");
const owners = config.owners;
module.exports ={
  execute: async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")&& !owners.includes(message.author.id)) return message.reply("You need `Manage Guild` permission to \`view\`,\`delete\` or \`set\` custom triggers");
    if(!args[0]) return message.channel.send("please use `set`/`view`/`delete`")
    // viewing the custom triggers
    
    if(args[0].toLowerCase() === "view"){
      custom.find({Guild: message.guild.id}).
      exec((err, res) => {
        if (err) console.log(err);
        var page = Math.ceil(res.length / 4);
        let embed = new Discord.MessageEmbed()
        .setColor("00ffff")
        .setTitle("Custom Triggers")

        //if there are no result
        if (res.length === 0) {
          embed.setColor("RED");
          embed.addField("No data found", "No custom commands created")
        } 

        let pg = parseInt(args[1]);
        if(pg != Math.floor(pg)) pg = 1;
        if(!pg) pg = 1;
        let end = pg * 4;
        let start = (pg * 4) - 4;

        if(res.length === 0){
          embed.addField("Error"," No pages found!");
        } 
        else if(res.length <= start){
          embed.addField("Error", "Page not found!");
        }
        else if(res.length <= end){
          embed.setFooter(`page ${pg} of ${page}`);
          for(i = start; i < res.length; i++){
            embed.addField(`${i + 1}. ${res[i].Command}`,`${res[i].Content}`);
          }
        } 
        else{
          embed.setFooter(`page ${pg} of ${page}`);
          for(i = start; i < end; i++){
          embed.addField(`${i + 1}. ${res[i].Command}`,`${res[i].Content}`);
        }
      }
      message.channel.send(embed);
    })
  }

    //deleteing the custom triggers
    
    else if(args[0].toLowerCase() === "delete"){
      if (!args[1]) return message.channel.send(`Provide a custom trigger you want to delete`);
      custom.findOne(
        { Command: args[1], Guild: message.guild.id },
        async (err, data) => {
        if (err) throw err;
        if (!data) return message.channel.send(`That is not a custom trigger`);
        custom.findOneAndDelete(
          { Command: args[1], Guild: message.guild.id },
          (err) => {
            if (err) throw err;
          }
        );
        return message.channel.send(`Successfully deleted the custom trigger ${args[1]}`);
      }
    );
  }

    //setting the custom trigger 

    else if(args[0].toLowerCase() === "set"){

    if (!args[1]) return message.channel.send(`Please specify a name for the custom trigger`);
    
    let name = args[1].toLowerCase();
    if (!args.slice(2).join(" ")) return message.channel.send(`Please specify content for the custom trigger`);

    custom.findOne(
      { Guild: message.guild.id, Command: name },
      async (err, data) => {
        if (err) throw err;
        if (data) {
          data.Content = args.slice(2).join(" ");
          data.save();

          message.channel.send(`Name: ${name}\n New Contents: ${args.slice(2).join(" ")}`);
        } else if (!data) {
            let newData = new custom({
              Guild: message.guild.id,
              Command: name,
              Content: args.slice(2).join(" ")
            });
            newData.save();
            message.channel.send(`Name: ${name}\n Contents: ${args.slice(2).join(" ")}`);
          }
        }
      );
    }

    else{
      return message.reply("Please only use `set`, `delete` or `view` for the custom trigger")
    }          

  },
  name:"ct",
  aliases: ["customtrigger"],
  description: 'Sets deletes or views custom triggers',
  usage:"<set/delete/view> <Trigger> <Reply>"
}