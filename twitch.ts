import tmi from "tmi.js";

export default function twitch() {
  const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
      reconnect: true,
      secure: true,
    },
    identity: {
      username: process.env.TWITCH_USERNAME,
      password: process.env.TWITCH_PASSWORD,
    },
    channels: [`${process.env.TWITCH_CHANNEL}`],
  });
  client.connect().catch(console.error);
  client.on("message", (channel, tags, message, self) => {
    if (self) return;
    if (message.toLowerCase() === "!hello") {
      client.say(channel, `@${tags.username}, heya from development!`);
    }
  });
}
