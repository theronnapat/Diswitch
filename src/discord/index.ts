const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES" ,"GUILD_BANS","GUILD_EMOJIS_AND_STICKERS"] })

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // console.log(`Invite your bot : https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_TOKEN}&permissions=8&scope=bot`)
    client.user.setPresence({ status: 'online' });
});
  
  client.login(process.env.DISCORD_TOKEN);