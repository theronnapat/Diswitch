export default function Ping(client) {
  client.on('interactionCreate', (interaction) => {
    // There are multiple types of interactions
    // Make sure this is a command
    if (!interaction.isCommand()) {
      return
    }
    // Access the name of the command and the given arguments
    const { commandName, options } = interaction
    // Perform the addition if the user is running the "add" command
    if (commandName === 'hello') {
      interaction.reply({
        content: 'Hello 👋🏻',
        ephemeral: true // Only the user can see this reply
      })
    }
  })
}
