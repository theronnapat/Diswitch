import { config } from "../config.js";

export default function Twitter(client) {
    client.on("message", (channel, tags, message, self) => {
      if (self) return;
  
      if (message.toLowerCase() === "!twitter") {
        client.say(channel, `@${tags.username}, Our discord link is twitter.com/${config.twitter}`);
      }
    });
  }
  