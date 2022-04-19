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

    const kicked = new MessageEmbed()
      .setColor("#000000")
      .setTitle(`You just kick <@${member.user.id}>!`)
      .setTimestamp()
      .setFooter({ text: "Diswitch" });
    
      const nopermission = new MessageEmbed()
      .setColor("#000000")
      .setTitle(`You don't have permission to kick user!`)
      .setTimestamp()
      .setFooter({ text: "Diswitch" });
    
      if (members.permissions.has("KICK_MEMBERS") == true) {
      await member.kick();
      await interaction.reply({ embeds: [kicked] });
    } else {
      await interaction.reply({ embeds: [nopermission] });
    }
  },
};
