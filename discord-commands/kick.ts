import { SlashCommandBuilder } from "@discordjs/builders";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick user!"),
  async execute(interaction: any) {
      // const user = interaction.user.id
        // user.kick
    await interaction.reply("Kick!");
  },
};
