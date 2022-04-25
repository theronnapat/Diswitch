import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction: any) {
    const ping = Date.now() - interaction.createdAt;

    await interaction.reply({
      content: "Pong!",
      embeds: [
        new MessageEmbed()
          .setColor("WHITE")
          .addFields([
            {
              name: "Bot Latency",
              value: `\`\`\`ini\n[ ${ping}ms ]\n\`\`\``,
              inline: true,
            },
          ])
          .setTimestamp(),
      ],
    });
  },
};
