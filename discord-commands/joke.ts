import { SlashCommandBuilder } from "@discordjs/builders";
import { message } from "./joke/index";

// console.log("Joke :", joke.joke)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Joke from Diswitch!"),
  async execute(interaction: any) {
    const joke = message[Math.round(Math.random() * message.length)];
    await interaction.reply(`Joke : ${joke.joke}`);
  },
};
