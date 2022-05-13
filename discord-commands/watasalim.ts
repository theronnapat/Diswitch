import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder().setName("salim").setDescription("วาทะสลิ่ม!"),
  async execute(interaction: any) {
    let response = await fetch(
      `https://watasalim.vercel.app/api/quotes/random`
    );
    let data = await response.json();
    let url = data.quote.url;
    let pathname = new URL(url).pathname;

    const message = new MessageEmbed()
      .setTitle("Awesome Salim Quotes")
      .setDescription(`${data.quote.body}`)
      .setFooter({ text: `watasalim.vercel.app${pathname}` });

    await interaction.reply({
      embeds: [message],
    });
  },
};
