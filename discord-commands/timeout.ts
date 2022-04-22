import { SlashCommandBuilder } from "@discordjs/builders";
import { GuildMember, MessageEmbed } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout user")
    .addUserOption((option) =>
      option.setName("target").setDescription("Select a user").setRequired(true)
    )
    .addNumberOption((option) =>
      option.setName("time").setDescription("Time for timeout (minutes)").setRequired(true)
    )
    .addStringOption((option) => 
      option.setName("reason").setDescription("Reason to timeout user").setRequired(false)
    ),
  async execute(interaction: any) {
    const members = interaction.member as GuildMember;
    const member = interaction.options.getMember("target");
    const times = interaction.options.getNumber("time");
    const reason = interaction.options.getString("reason");
    const permission = members.permissions.has("ADMINISTRATOR") == true

    const timouted = new MessageEmbed()
      .setColor("#000000")
      .setDescription(`You just timeout <@${member.user.id}> for ${times} minutes with ${reason} reason!`)
      .setTimestamp()
      .setFooter({ text: "Diswitch" });

    const nopermission = new MessageEmbed()
      .setColor("#000000")
      .setDescription(`You don't have permission to timeout user! <:narzelAmogus:961809766244564992>`)
      .setTimestamp()
      .setFooter({ text: "Diswitch" });

    if (permission) {
      await member.timeout(times * 60 * 1000, reason);
      await interaction.reply({ embeds: [timouted], ephemeral: true });
    } else {
      await interaction.reply({ embeds: [nopermission], ephemeral: true });
    }
  },
};
