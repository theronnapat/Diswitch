import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("covidall")
    .setDescription("Global covid 19"),
  async execute(interaction: any) {
    let response = await fetch(`https://disease.sh/v3/covid-19/all`);
    let data = await response.json();
    const message = new MessageEmbed()
      .setTitle("Global Covid 19 Data")
      .addFields(
        {
          name: "Total case",
          value: `${data.cases.toLocaleString()}`,
          inline: true,
        },
        {
          name: "Total death",
          value: `${data.deaths.toLocaleString()}`,
          inline: true,
        },
        {
          name: "Total recover",
          value: `${data.recovered.toLocaleString()}`,
          inline: true,
        },
        {
          name: "Today case",
          value: `${data.todayCases.toLocaleString()}`,
          inline: true,
        },
        {
          name: "Today death",
          value: `${data.todayDeaths.toLocaleString()}`,
          inline: true,
        },
        {
          name: "Today recover",
          value: `${data.todayRecovered.toLocaleString()}`,
          inline: true,
        }
      )
      .setFooter({ text: `Data from disease.sh` });

    await interaction.reply({ embeds: [message] });
  },
};
