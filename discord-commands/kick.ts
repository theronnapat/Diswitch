import { SlashCommandBuilder } from "@discordjs/builders";
import { GuildMember, MessageEmbed } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick user")
    .addUserOption((option) =>
      option.setName("target").setDescription("Select a user").setRequired(true)
    ),
  async execute(interaction: any) {
    const members = interaction.member as GuildMember;
    const member = interaction.options.getMember("target");
    const report = new MessageEmbed()
      .setColor("#000000")
      .setTitle("Kick Report")
      .addFields(
        { name: 'Kick by', value: `<@${interaction.user.id}>`, inline: true},
        { name: 'Kick', value: `<@${member.user.id}>`, inline: true},
      )
      .setTimestamp()
      .setFooter({ text: "Diswitch report" });

    const kicked = new MessageEmbed()
      .setColor("#000000")
      .setDescription(`You just kick <@${member.user.id}> !`)

    const nopermission = new MessageEmbed()
      .setColor("#000000")
      .setTitle(`You don't have permission to kick user!`)

    if (members.permissions.has("KICK_MEMBERS") == true) {
      await member.kick();
      await interaction.reply({ embeds: [kicked], ephemeral: true });
    } else {
      await interaction.reply({ embeds: [nopermission], ephemeral: true });
    }
  },
};
