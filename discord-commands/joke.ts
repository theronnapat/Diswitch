import { SlashCommandBuilder } from "@discordjs/builders";
import { en, th } from "./joke/index";

// console.log("Joke :", joke.joke)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Joke from Diswitch!"),
  async execute(interaction: any) {
    if ( process.env.ENGLISH === 'true' ){
      const jokeen = en[Math.round(Math.random() * en.length)];
      await interaction.reply(`Joke : ${jokeen.joke}`);
    } else {
      const joketh = th[Math.round(Math.random() * th.length)];
      await interaction.reply(`Joke : ${joketh.joke}`);
    }
  },
};
