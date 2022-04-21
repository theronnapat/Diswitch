import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";

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
    requiredPerms: ["MANAGE_MESSAGES"],
    async execute(interaction: any) {
        const deleted = await interaction.channel!.bulkDelete(
            interaction.options.getNumber("amount", true),
            true
        );

        const successEmbed = new MessageEmbed()
            .setColor("#fffff")
            .setDescription(`You just deleted ${deleted.size} messages.`);
        await interaction.reply({ embeds: [successEmbed], ephemeral: true });
    },
};