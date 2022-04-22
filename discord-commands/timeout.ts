import { SlashCommandBuilder } from "@discordjs/builders";
import { GuildMember, MessageEmbed } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout user")
    .addUserOption((option) =>
      option.setName("target").setDescription("Select a user").setRequired(true)
    ),
  async execute(interaction: any) {
    const members = interaction.member as GuildMember;
    const member = interaction.options.getMember("target");

    const timouted = new MessageEmbed()
      .setColor("#000000")
      .setDescription(`You just timeout <@${member.user.id}>!`)
      .setTimestamp()
      .setFooter({ text: "Diswitch" });

    const nopermission = new MessageEmbed()
      .setColor("#000000")
      .setDescription(`You don't have permission to timeout user!`)
      .setTimestamp()
      .setFooter({ text: "Diswitch" });

    if (members.permissions.has("ADMINISTRATOR") == true) {
      await member.timeout(10 * 60 * 1000);
      await interaction.reply({ embeds: [timouted] });
    } else {
      await interaction.reply({ embeds: [nopermission], ephemeral: true });
    }
  },
};
