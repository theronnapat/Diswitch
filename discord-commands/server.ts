import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { server } from "../data";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Server info!"),
  async execute(interaction: any) {
    const servers = new MessageEmbed().setTitle(server.name);

    await interaction.reply({ embeds: [servers] });
  },
};
