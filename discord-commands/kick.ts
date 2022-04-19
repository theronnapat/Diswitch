import { SlashCommandBuilder } from "@discordjs/builders";
import { Permissions, GuildMember } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick user")
    .addUserOption((option) =>
      option.setName("target").setDescription("Select a user").setRequired(true)
    ),
  async execute(interaction: any) {
    const member = interaction.member as GuildMember;
    if (member.permissions.has("KICK_MEMBERS") == true){
      const member = interaction.options.getMember("target");
      member.kick();
      await interaction.reply("Kick!");
    } else {
      await interaction.reply("You don't have permission")
    }
  },
};
