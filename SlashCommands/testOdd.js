const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("check_odd")
    .setDescription("Check number is odd")
    .setDefaultPermission(true)
    .addNumberOption((option) => {
      return option
        .setName("num")
        .setDescription("Number to check")
        .setRequired(true);
    }),
  async execute(interaction) {
    interaction.reply({
      content: interaction.options.getNumber("num") % 2 === 0 ? "Even" : "Odd",
    });
  },
};
