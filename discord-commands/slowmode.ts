import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed, GuildMember } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("slowmode")
    .setDescription("Delete specified amount of messages.")
    .addNumberOption((option) => 
        option.setName("time").setDescription("Slow mode time").setRequired(true)
    ),
  async execute(interaction: any) {
    const members = interaction.member as GuildMember;
    const time = interaction.options.getNumber("time");
    const channel = interaction.channel;

    if (members.permissions.has("MANAGE_CHANNELS") == true) {

      await channel.setRateLimitPerUser(time);

      const successEmbed = new MessageEmbed()
        .setColor("#000000")
        .setDescription(`You set slowmode ${channel} for ${time}`)
        .setTimestamp()
        .setFooter({ text: "Diswitch" });
      await interaction.reply({ embeds: [successEmbed], ephemeral: true });
    } else {
      const nopermission = new MessageEmbed()
        .setColor("#000000")
        .setTitle(`You don't have permission to set slowmode!`)
        .setTimestamp()
        .setFooter({ text: "Diswitch" });
      await interaction.reply({ embeds: [nopermission], ephemeral: true });
    }
  },
};
