const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js")
const factGenerator = require('facts-generator')
const facts = require("../../node_modules/facts-generator/index");
module.exports = {

  execute: async(bot, message, args) => {
  //command

    async function work() {

        let owo = (await neko.sfw.fact());

        message.channel.send(owo.fact).catch(error => {
            console.error(error);
        });
      }

      work();
    },  
    name:"fact",
    aliases: ["getfact","facts"],
    description: 'Sends a fact',
    usage:""
}
