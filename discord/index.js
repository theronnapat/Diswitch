import { Client, Collection, Intents, Interaction, Message} from "discord.js"
import Ping from "./commands/ping.js"
export default function discord() {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  })

  client.commands = new Collection()

  client.once("ready", () => {
    console.log(`Discord : Login as ${client.user.tag}`)

    Ping(client)
  })

  client.login(process.env.DISCORD_TOKEN)
}
