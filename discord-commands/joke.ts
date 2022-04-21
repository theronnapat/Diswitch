import { SlashCommandBuilder } from "@discordjs/builders";
import { en } from "./joke/index";

// console.log("Joke :", joke.joke)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Joke from Diswitch!"),
  async execute(interaction: any) {
    const joke = en[Math.round(Math.random() * en.length)];
    await interaction.reply(`Joke : ${joke.joke}`);
  },
};
