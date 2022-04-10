const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ status: "online" });
});

client.login(process.env.DISCORD_TOKEN);
