export default function Ping(client) {
  client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) {
      return;
    }
    const { commandName, options } = interaction;

    if (commandName === "hello") {
      interaction.reply({
        content: "Hello 👋🏻",
        ephemeral: true, // Only the user can see this reply
      });
    }
  });
}
