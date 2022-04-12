import tmi from "tmi.js";
import Ping from "./commands/ping.js";
import Discord from "./commands/discord.js";

export default function twitch() {
  // Define configuration options
  const opts = {
    identity: {
      username: process.env.TWITCH_USERNAME,
      password: process.env.TWITCH_PASSWORD,
    },
    channels: [process.env.TWITCH_CHANNEL],
  };

  // Create a client with our options
  const client = new tmi.client(opts);

  // Register our event handlers (defined below)
  client.on("connected", onConnectedHandler);

  client.on("message", (channel, tags, message, self) => {
    // "Alca: Hello, World!"
    console.log(`[${tags["display-name"]}]: ${message}`);
  });
  
  Ping(client);
  Discord(client)
  // Connect to Twitch:
  client.connect();

  // Called every time the bot connects to Twitch chat
  function onConnectedHandler(addr, port) {
    console.log(`Twitch : Connected to ${process.env.TWITCH_CHANNEL}`);
  }
}
