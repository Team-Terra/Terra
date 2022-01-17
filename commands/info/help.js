const Discord = require('discord.js');
const config = require('../../config.json')
const fs = require("fs")

module.exports = {
  execute: async (bot, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefix: config.prefix
      }
    }
    let prefix = prefixes[message.guild.id].prefix;

    const data = [];
    const { commands } = bot;
    const name = args[0];

    if (name === "info") {
      const helpEmbed = new Discord.MessageEmbed()
        .setColor('48bdbd')
        .setTitle(`Terra help`)
        .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
        .setDescription('Who is Terra? Terra is a bot that annoys eveyone in the server.')
        .setURL('https://discord.gg/TmJbwVzXq6')
        .addField(`Prefix:`, prefix)
        .addField(`Support`, `\[Terra help server\]\(https://discord.gg/TmJbwVzXq6\)`)
        .addField(`Invite link`, `\[invite\]\(https://discord.com/api/oauth2/authorize?client_id=909152718973698078&permissions=1642758929655&redirect_uri=https%3A%2F%2Flinktr.ee%2Fterra.ai&response_type=code&scope=bot%20guilds.join\)`)
        .addField(`GitHub`, `\[bad code here\]\(https://github.com/soupykid\)`)
        .addField(`Commands list`, `\`${prefix}help\` for the commands list`)

      return message.channel.send(helpEmbed);
    }
    if (!name) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Terra help list \n\n If you want the bot to stop chatting, type and send, ".triggers off"`)
        .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
        .setColor('48bdbd')
        .addField("Triggers", "`ct`,`cbt`,`trigger`,`pgtriggers`", true)
        .addField("Moderation", "`kick`,`ban`,`clear`,`mute`,`nick`")
        .addField("Currency", "`balance`,`beg`,`daily`\n   `deposit`,`gamble`,`pay`\n   `rob`,`rich`,`shop`\n  `sell`,`inventory`,`withdraw`")
        .addField("Config", "`blacklist`,`config`, `prefix`, `setMessage`, `setRole`, `setWelcome`")
        .addField("Fun", "`8ball`,`blackjack`,`cats`, `coinflip`,`cuddle`,`darkmeme`,  `dance`,`jojodance`,`jojo`,  `dogs`,`gay`,   `hug`,`kill`,`kiss`,   `meme`,`pp`,`snipe`,   `waifu`,`virgin`, `hack`, `math`, `pat`, `punch`, `slap`")
        .addField("Misc", "`about`,`all_info`,`avatar`, `support`, `vote`, `help`, `uptime`, `ping`,`serverinfo`,   `stats`,`userinfo`,`verison`", true)
        .setFooter(`\nYou can send ${prefix}help [command name] to get info on a specific command!`, bot.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        if (!command) {
          return message.channel.send("that's not a valid command!");
        }
        data.push(`Name: ${command.name}`);
        if (command.aliases)
          data.push(`Aliases: ${command.aliases.join(", ")}`);
        if (command.description)
          data.push(`Description: ${command.description}`);
        if (command.usage)
          data.push(`Usage: ${prefix}${command.name} ${command.usage}`);
        if (command.owner)
          data.push(`Owner: ${command.owner} `);

        let embed = new Discord.MessageEmbed()
          .setDescription(data, { split: true })
          .setColor("48bdbd")
          .setFooter(`Terra help`, bot.user.displayAvatarURL())
      message.channel.send(embed);
    }

  },
  name: "help",
  aliases: [],
  description: 'Does what it does',
  usage: "<command name>"
}