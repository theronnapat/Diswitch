import { SlashCommandBuilder } from "@discordjs/builders";


module.exports = {
    data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("Verify and permission to send messages"),
    async execute(interaction: any) {
        var role = interaction.guild.roles.cache.find((role: { name: string; }) => role.name === "verify");

        interaction.roles.add(role)

    // const isVerify = interaction.user.id.roles.cache.has('role-id-here');
        // console.log(interaction)
    await interaction.reply("Verify!");
  },
};
