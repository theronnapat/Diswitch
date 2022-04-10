import { Client, Collection, Intents, Interaction, Message } from "discord.js";
import Ping from "./commands/hello.js";
export default function discord() {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });

  // client.commands = new Collection();

  client.once("ready", () => {
    console.log(`Discord : Login as ${client.user.tag}`);

    const guildId = process.env.DISCORD_GUILD_ID
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
      commands = guild.commands
    } else {
      commands = client.application?.commands
    }

    commands?.create({
      name: 'hello',
      description: 'Say hello to DisWitch 👋🏻',
    })
  });
  Ping(client);

  client.login(process.env.DISCORD_TOKEN);
}
