import Config from '../config.json'
export default function Ping(client) {
    client.on("message", (channel, tags, message, self) => {
      if (self) return;
  
      if (message.toLowerCase() === "!discord") {
        client.say(channel, `@${tags.username}, Our discord link is discord.gg/${Config.discord}`);
      }
    });
  }
  