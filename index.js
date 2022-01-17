const Discord = require('discord.js');
const db = require("quick.db")
const fs = require("fs");
const config = require('./config.json');
const triggers = require('./triggers/triggers.json')
const betterTriggers = require("./triggers/betterTriggers.json");
const custom = require("./models/custom.js");
const cbt = require("./models/cbt.js")

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(() => {
  fs.readdirSync('./commands/').forEach(dir => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
    for(let file of commands){
      let pull =  require(`./commands/${dir}/${file}`);
      if(pull.name){
        bot.commands.set(pull.name, pull);
      }else {
        continue;
      }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
    }
  });
});

require('http').createServer((req, res) => res.end('http server on')).listen(3000)

bot.on("ready", () => {
    bot.user.setStatus("dnd");
});


// bot online stuff 










bot.once('ready', () => {
  console.log(`active`)
  //Auto Activities List
  const activities = [{
    "text": `${bot.users.cache.size} users`,
    "type": "WATCHING"
  },
  {
    "text": "https://souptech.xyz/terra",
    "type": "PLAYING"
  },
  {
    "text": ".help",
    "type": "WATCHING"
  },
  {
    "text": `${bot.guilds.cache.size} servers`,
    "type": "WATCHING" 
  },
  {
    "text": "LGBTQ+ Rights <3",
    "type": "PLAYING"
  }
  ];
  setInterval(() => {
    const activity = activities[Math.floor(Math.random() * activities.length)];
    bot.user.setActivity(activity.text, {
      type: activity.type
    });
  }, 20000);
});













// bot online stuff 

//message event: triggers, commands, custom triggers
bot.on("message", async msg => {

  if(!msg.guild) return;
  if(!msg.guild.me.hasPermission(["VIEW_CHANNEL","SEND_MESSAGES","READ_MESSAGE_HISTORY","ATTACH_FILES"])) return;
  if(!msg.channel.permissionsFor(msg.guild.me).has(["VIEW_CHANNEL","SEND_MESSAGES","READ_MESSAGE_HISTORY", "ATTACH_FILES"])) return;

  //triggers
  if (msg.author.bot) return;
  let triggerr = db.fetch(`triggerr_${msg.guild.id}`)
  if (!triggerr) triggerr = "on"

  //custom triggers  
  let ct = msg.content.toLowerCase()
  if (!custom) return;

  custom.findOne({ Guild: msg.guild.id, Command: ct },
    async (err, data) => {
      if (err) throw err;
      if (data && data.Command in triggers && triggerr === "on") return msg.channel.send(data.Content);
      else if (data && triggerr === "on") return msg.channel.send(data.Content);
      else if (msg.content.toLowerCase() in triggers && triggerr === "on") {// normal triggers 
        msg.channel.send(triggers[msg.content.toLowerCase()]);
      }
    }
  )

  //better triggers™
  let messageArray = msg.content.trim().split(/ +/g)

  function ree(array){
    return [...new Set(array)]
  }
  for (i = 0; i < ree(messageArray).length; i++) {
    let j = i;
    cbt.findOne({ Guild: msg.guild.id, Trigger: messageArray[i] },
      async (err, data) => {
        if (err) return;
        if (messageArray[0].toLowerCase() in triggers && messageArray[0].toLowerCase() in betterTriggers && !messageArray[1]) return;
        
        if (data && triggerr === "on") return msg.channel.send(data.Reply);
        else if(messageArray[j].toLowerCase() in betterTriggers && triggerr === "on"){
          return msg.channel.send(betterTriggers[messageArray[j].toLowerCase()]);
        }
      }
    )
    //break;
  }
})

bot.on("message", async message => {

  if(!message.guild) return;
  if(!message.guild.me.hasPermission(["VIEW_CHANNEL","SEND_MESSAGES","READ_MESSAGE_HISTORY", "ATTACH_FILES"])) return;
  if(!message.channel.permissionsFor(message.guild.me).has(["VIEW_CHANNEL","SEND_MESSAGES","READ_MESSAGE_HISTORY", "ATTACH_FILES"])) return;

  if(triggerr ="on"){
    let random = Math.floor(Math.random() * 1500);
    if(random === 435 && triggers == "on"){message.channel.send("If you enjoy using Terra, please vote for it at <https://top.gg/bot/909152718973698078/vote>")}
  }
  

  let blacklist = await db.fetch(`blacklist_${message.author.id}`)
  if (blacklist === "Blacklisted") {
    return;
  }
  //Gay_Bot prefix 
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (message.guild == null) return
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    }
  }
  let prefix = prefixes[message.guild.id].prefix;

 if (message.content === `<@!${bot.user.id}>` || message.content === `<@!${bot.user.id}>`) {
    message.channel.send(`my prefix is ${prefix} \n\`${prefix}help to get list of commands\``)
  }

  if (!message.content.startsWith(prefix)) return;
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  let command = bot.commands.get(cmd);
  if (message.author.bot || message.channel.type === "dm") return; //if the message channel is a DM the commands and triggers will not work

  if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    command = bot.commands.get(bot.aliases.get(cmd));
  }
  try {
    command.execute(bot, message, args);
  } catch (e) {
    return;
  }
})






bot.on('guildCreate', guild =>{

    const channelId = '909544685029191720'; //put your channel ID here

    const channel = bot.channels.cache.get(channelId); 
     
    if(!channel) return; //If the channel is invalid it returns
    const embed = new Discord.MessageEmbed()
        .setTitle('I Joined A Guild!')
        .setDescription(`\`\`\`\n Guild Name: ${guild.name}\n Guild ID: ${guild.id}\n Shard: ${guild.shardID}\n Member Count: ${guild.memberCount}\n\`\`\``)
        .setTimestamp()
        .setColor('BBB5BA')
        .setFooter(`I'm in ${bot.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});


bot.on('guildDelete', guild =>{
    const channelId = '909544687931633724';//add your channel ID
    const channel = bot.channels.cache.get(channelId); //This Gets That Channel
    
    if(!channel) return;  //If the channel is invalid it returns
    const embed = new Discord.MessageEmbed()
        .setTitle('I Left A Guild!')
        .setDescription(`\`\`\`\n Guild Name: ${guild.name}\n Guild ID: ${guild.id}\n Shard: ${guild.shardID}\n Member Count: ${guild.memberCount}\n\`\`\``)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`I'm in ${bot.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});


//events
// bot.on(`guildCreate`, async guild => {
  //   const embed = new Discord.MessageEmbed()
  //   .setColor("36393F")
  //   .setTitle("Joined New Guild")
  //  .setDescription(`\`\`\`\n Guild Name: ${guild.name}\n Guild ID: ${guild.id}\n Shard: ${guild.shardID}\n Member Count: ${guild.memberCount}\n\`\`\``)

 // bot.shard.broadcastEval(
 // (async () => {
 //     const channel = await this.channels.cache.get('830155807873826888');
 //     if (channel) {
 //         channel.send({ embed: ${JSON.stringify(embed)} });
 //     }
 // })();
 // );
//    })

//  bot.on(`guildDelete`, async guild => {
  // const embed = new Discord.MessageEmbed()
  // .setColor("36393F")
  // .setTitle("Removed From Guild")
 //  .setDescription(`\`\`\`\n Guild Name: ${guild.name}\n Guild ID: ${guild.id}\n Shard: ${guild.shardID}\n Member Count: ${guild.memberCount}\n\`\`\``)

 //  bot.shard.broadcastEval(
 // (async () => {
 //     const channel = await this.channels.cache.get('891813055678263328');
 //     if (channel) {
 //         channel.send({ embed: ${JSON.stringify(embed)} });
//      }
 //   })();
//  );
//  })




bot.on('guildMemberAdd', async (member) => {
  require("./events/guildMemberAdd")(member);
});

bot.on("messageDelete", async (message) => {
  require("./events/messageDelete")(message);
});

let time = Date.now()
let now = new Date(time)
process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error, now.toUTCString()));
bot.login(config.bot_token);