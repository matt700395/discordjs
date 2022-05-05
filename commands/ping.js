const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('야') // 명령어 호출
		.setDescription('호라고 대답합니다'), // 명령어 표현
	async execute(interaction) {
		await interaction.reply('호우!'); //봇이 대답할 말
	},
};