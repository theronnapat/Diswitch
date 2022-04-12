import { config } from "../config.js";

export default function Discord(client) {
    client.on("message", (channel, tags, message, self) => {
      if (self) return;
  
      if (message.toLowerCase() === "!discord") {
        client.say(channel, `@${tags.username}, Our discord link is discord.gg/${config.discord}`);
      }
    });
  }
  