import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js"

module.exports = {
  data: new SlashCommandBuilder()
    .setName("poke")
    .setDescription("Replies with Pong!")
    .addUserOption((option) =>
        option.setName('target').setDescription('user to poke').setRequired(true)
    ),
  async execute(interaction: any) {
    const target = interaction.options.getMember('target')

     await interaction.reply(`${target}, <@${interaction.user.id}> Just poke you`)
  },
};
