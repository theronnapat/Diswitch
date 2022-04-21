import { SlashCommandBuilder } from "@discordjs/builders";
import { GuildMember, MessageEmbed } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban user")
    .addUserOption((option) =>
      option.setName("target").setDescription("Select a user").setRequired(true)
    ),
  async execute(interaction: any) {
    const members = interaction.member as GuildMember;
    const member = interaction.options.getMember("target");

    const baned = new MessageEmbed()
      .setColor("#000000")
      .setTitle(`You just ban <@${member.user.id}>!`)
      .setTimestamp()
      .setFooter({ text: "Diswitch" });

    const nopermission = new MessageEmbed()
      .setColor("#000000")
      .setTitle(`You don't have permission to ban user!`)
      .setTimestamp()
      .setFooter({ text: "Diswitch" });

    if (members.permissions.has("BAN_MEMBERS") == true) {
      await member.ban();
      await interaction.reply({ embeds: [baned] });
    } else {
      await interaction.reply({ embeds: [nopermission], ephemeral: true });
    }
  },
};
