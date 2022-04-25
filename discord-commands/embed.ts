import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed, GuildMember } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Create embed")
    .addStringOption((option) =>
      option.setName("title").setDescription("Set title").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("description")
        .setDescription("Set description")
        .setRequired(true)
    ),
  async execute(interaction: any) {
    const author = interaction.member as GuildMember;
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");

    const embed = new MessageEmbed()
      .setColor("DARK_GOLD")
      .setTitle(`${title}`)
      .setDescription(`${description}`)
      .setTimestamp()
      .setFooter({ text: `Message create by ${author.user.username}` });

    await interaction.reply({ embeds: [embed] });
  },
};
