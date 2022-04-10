import { Client, Collection, Intents, Interaction, Message} from "discord.js"
import Ping from "./commands/ping.js"
export default function discord() {
  // Create a new client instance
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  })

  client.commands = new Collection()


  // When the client is ready, run this code (only once)
  client.once("ready", () => {
    console.log(`Discord : Login as ${client.user.tag}`)

    Ping(client)
  })

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if (!command) return

    try {
      await command.execute(interaction)
    } catch (error) {
      console.error(error)
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      })
    }
  })

  // Intents.FLAGS.GUILD_MESSAGES
  client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return

    console.log("received message", `${msg.author.tag}: ${msg.content}`)

    if (msg.content.match(/^ping/i)) {
      msg.channel.send("Pong from dev env!")
    }
  })

  // Login to Discord with your client's token
  client.login(process.env.DISCORD_TOKEN)
}
