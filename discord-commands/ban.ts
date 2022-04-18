import { SlashCommandBuilder } from "@discordjs/builders";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("ban user")
    .addUserOption((option) =>
      option.setName("target").setDescription("Select a user").setRequired(true)
    ),
  async execute(interaction: any) {
    await interaction.reply("Ban!");
    const member = interaction.options.getMember("target");
    member.ban();
  },
};
