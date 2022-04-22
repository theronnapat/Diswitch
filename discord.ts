import fs from "node:fs";
import { Client, Collection, Intents, Interaction, Message, MessageEmbed } from "discord.js";
import { server } from './data'

import type { SlashCommandBuilder } from "@discordjs/builders";
// import type { SendEmbed } from "./lib/MessageEmbed"

declare module "discord.js" {
  interface Client {
    commands: Collection<string, Command>;
  }
  interface Command extends NodeModule {
    data: SlashCommandBuilder;
    execute(interaction: CommandInteraction): Promise<any>;
  }
  interface TextWithEmbed extends TextChannel {
    send(options: string | MessagePayload | MessageOptions): Promise<Message>;
  }
}

export default function discord() {
  // Create a new client instance
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
    ],
  });

  client.commands = new Collection();

  const commandFiles = fs
    .readdirSync("./discord-commands")
    .filter((file: string) => file.endsWith(".ts"));

  const eventFiles = fs
    .readdirSync("./events")
    .filter((file) => file.endsWith(".ts"));

  for (const file of commandFiles) {
    const command = require(`./discord-commands/${file}`);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
  }

  for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }

  // When the client is ready, run this code (only once)
  // client.once("ready", () => {
  //   console.log("Discord bot is Ready!");
  // });

  client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  });

  client.on('guildMemberAdd', (member) => {
    const welcome = new MessageEmbed()
      .setTitle(`Welcome to ${server.name}`)
      .setDescription(`Don't forget to read the rules at <#${server.rule}>!`)

    client.users.fetch(member.user.id).then((user) => {
      try {
        user.send({ embeds: [welcome] })
      } catch (err){
        console.log("err")
      }
    })
  })

  // Intents.FLAGS.GUILD_MESSAGES
  client.on("messageCreate", async (msg: Message) => {
    if (msg.author.bot) return;

    console.log("received message", `${msg.author.tag}: ${msg.content}`);

    if (msg.content.match(/^ping/i)) {
      msg.channel.send("Pong from dev env!");
    }
  });

  // Login to Discord with your client's token
  client.login(process.env.DISCORD_TOKEN);
}

// import dotenvFlow from "dotenv-flow";
// dotenvFlow.config();
// discord()
