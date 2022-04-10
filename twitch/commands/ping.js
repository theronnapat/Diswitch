export default function Ping(client) {
  client.on("message", (channel, tags, message, self) => {
    if (self) return;

    if (message.toLowerCase() === "!ping") {
      client.say(channel, `@${tags.username}, pong!`);
    }
  });
}
