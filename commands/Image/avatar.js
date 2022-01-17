const Discord = require('discord.js');

module.exports ={
    execute: async(bot, message, args) => {
	if (!message.mentions.users.size) {
			
		let your_avatar = message.author.displayAvatarURL({dynamic: true, size:  2048})

		let avatarEmbed = new Discord.MessageEmbed()
		.setColor('107d9c')
		.setTitle('your avatar:')
		.setImage(your_avatar)
	
		message.channel.send(avatarEmbed);
	
	}

	var avatarList = message.mentions.users.map(user => {

		let user_avatar = user.displayAvatarURL({dynamic: true, size:  2048})
		let avatar_Embed = new Discord.MessageEmbed()
		.setColor('107d9c')
		.setTitle(`${user.username}'s avatar:`)
		.setImage(user_avatar)

	message.channel.send(avatar_Embed);	
	
	});            
    },
    name:"avatar",
    aliases: ["pfp","av"],
    description: 'Sends a users avatar',
    usage:"<user>"
}
