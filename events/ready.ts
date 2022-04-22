module.exports = {
  name: "ready",
  once: true,
  execute(client: any) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    client.user.setPresence({ activities: [{ name: `/help | I\'m in ${client.guilds.cache.size} server` }], status: 'online' });
  },
};
