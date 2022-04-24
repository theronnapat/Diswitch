import { SlashCommandBuilder } from "@discordjs/builders";
import { GuildMember, MessageEmbed } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("create")
    .setDescription("Kick user")
    .addStringOption((option) =>
      option.setName("name").setDescription("Create name").setRequired(true)
    ),
    // .addStringOption((option) => 
    //     option.setName("type").setDescription("type").addChoice('Funny', 'channel').addChoice('Meme', 'voice').addChoice('Movie', 'gif_movie').setRequired(true)
    // ),
  async execute(interaction: any) {
    const members = interaction.member as GuildMember;
    const name = interaction.options.getString("name");
    // const type = interaction.options.getString("type")

    // const kicked = new MessageEmbed()
    //   .setColor("#000000")
    //   .setDescription(`You just kick <@${member.user.id}> !`);

    const nopermission = new MessageEmbed()
      .setColor("#000000")
      .setTitle(`You don't have permission to kick user!`);

    if (members.permissions.has("KICK_MEMBERS") == true) {
        interaction.guild.channels.create(name, {
            type: 'voice',
            permissionOverwrites: [{
                id: interaction.guild.id,
                allow: ['VIEW_CHANNEL'],
                deny: ['SEND_MESSAGES'],
            }]
        });
        await interaction.reply('Created!',)
    } else {
      await interaction.reply({ embeds: [nopermission], ephemeral: true });
    }
  },
};
