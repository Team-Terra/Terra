const { ShardingManager}  = require('discord.js');
const Discord =  require('discord.js');
const config = require("./config.json")
const manager = new ShardingManager('./bot.js', { 
    token: config.bot_token,
    //totalShards: 1
});

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn(amount = this.totalShards, delay = 1000,spawnTimeout = -1);