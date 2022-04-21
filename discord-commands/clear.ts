import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed, GuildMember } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Delete specified amount of messages.")
        .addNumberOption((option) =>
            option
                .setName("amount")
                .setDescription("Amount of messages to delete")
                .setRequired(true)
        ),
    // requiredPerms: ["MANAGE_MESSAGES"],
    async execute(interaction: any) {
        const members = interaction.member as GuildMember;
        if ( members.permissions.has("MANAGE_MESSAGES") == true ){
        const deleted = await interaction.channel!.bulkDelete(
            interaction.options.getNumber("amount", true),
            true
        );
        
        const successEmbed = new MessageEmbed()
            .setColor("#000000")
            .setDescription(`You just deleted ${deleted.size} messages.`)
            .setTimestamp()
            .setFooter({ text: "Diswitch" });
        await interaction.reply({ embeds: [successEmbed], ephemeral: true });
        } else {
            const nopermission = new MessageEmbed()
            .setColor("#000000")
            .setTitle(`You don't have permission to clear message!`)
            .setTimestamp()
            .setFooter({ text: "Diswitch" });
            await interaction.reply({ embeds: [nopermission], ephemeral: true });
        }
    },
};