const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check bot is alive")
    .setDefaultPermission(true),
  async execute(interaction) {
    interaction.reply("Pong!");
  },
};
