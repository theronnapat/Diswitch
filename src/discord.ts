const Discord = require('discord.js');
require('dotenv').config();
const DSclient = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES" ,"GUILD_BANS","GUILD_EMOJIS_AND_STICKERS"] })

const prefix = process.env.PREFIX;

DSclient.on('ready', () => {
  console.log(`Logged in as ${DSclient.user.tag}!`);
  DSclient.user.setPresence({ activities: [{ name: 'activity' }], status: 'online' });
  const statusArray = [
    'Kumi guys, WATCHING',
    'movie on netflix, WATCHING',
    'Kumi website, PLAYING',
    'kumi history, WATCHING',
    'random podcast, LISTENING',
    ' morning news, LISTENING',
    'Moderator working, WATCHING',
    ' american football with my best friend, PLAYING',
    'random music in spotify, LISTENING',
    '🗺️emoji war💂, PLAYING', 
    'kumi podcast, LISTENING',
    'Hide and seek, PLAYING',
    'giveaways, WATCHING',
    'Kumi butter balm, PLAYING',
    'everyone online, WATCHING',
    'Simon says not simoon says, PLAYING',
    'GTA V, PLAYING',
    'NETFLIX, WATCHING',
    'Freefire, PLAYING',
    'Roblox, PLAYING',
    'Monkeytype.com, PLAYING',
  ];

    setInterval(() => {
      DSclient.user.setStatus('online');
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
      DSclient.user.setActivity(status, { type: mode })

    }, 3000)
});

DSclient.login(process.env.DISCORD_TOKEN);