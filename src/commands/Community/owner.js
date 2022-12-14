const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('owner')
		.setDescription('Provides information about the owner.'),
	async execute(interaction) {
		await interaction.reply({content:'Created with Love by <@515203288950636578>'});
	},
};
