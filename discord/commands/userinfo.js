export default function Ping(client) {
    client.on("interactionCreate", (interaction) => {
      if (!interaction.isCommand()) {
        return;
      }
      const { commandName, options } = interaction;
  
      if (commandName === "user") {
        interaction.reply({
          content: `Your name and tag : ${interaction.user.tag}\nYour id : ${interaction.user.id}`,
          ephemeral: false, // Only the user can see this reply
        });
      }
    });
  }
  