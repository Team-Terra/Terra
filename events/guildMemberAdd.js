const Discord = require("discord.js")
const { registerFont } = require('canvas')
const Canvas = require('canvas')
const db = require("quick.db");
const messageDelete = require("./messageDelete");
registerFont('./fonts/FastHand.ttf', { family: 'Fast Hand' })

module.exports = async (member) => {

    let pwp = db.fetch(`welcome${member.guild.id}`)
    let msg = db.fetch(`welcomemsg${member.guild.id}`)
    let role = db.fetch(`role${member.guild.id}`)

    const channel = member.guild.channels.cache.get(pwp)

    if (!channel) return;

    const canvas = Canvas.createCanvas(1024, 500);//image size
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage("./wallpaper.jpg");//background
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);


    ctx.font = '90px Fast Hand';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign ="center"
    ctx.fillText(`Welcome`, 500, 350);


    ctx.font = `50px Fast Hand`
    ctx.fillStyle = '#ffffff';
    ctx.textAlign ="center"
    let uwu =`${member.user.tag}`
    let UWU = ctx.measureText(uwu).width
    ctx.fillText(uwu, 500, 400);

    ctx.font = `40px Fast Hand`
    ctx.fillStyle = '#ffffff';
    ctx.textAlign ="center"
    let owo = `You're member ${member.guild.memberCount}, enjoy the server!`
    let OWO = ctx.measureText(owo).width
    ctx.fillText(owo, 500, 450);

    ctx.beginPath();
    ctx.arc(490, 130, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar, 390, 30, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'lesbian_bot-is-the-best-name.png');
    if (!msg && !role) {
        return channel.send(attachment);
    }else if(!role && !channel.guild.roles.cache.get(role)){
        return channel.send(msg, attachment)
    }else{
        channel.send(msg, attachment);
        if(!channel.guild.roles.cache.get(role)) return; 
        member.roles.add(role);
    }
};