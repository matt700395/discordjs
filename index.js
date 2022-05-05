// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
// GUILDS 서버를 예전에 길드라고 불렀다고함

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === '야') {
		await interaction.reply('호우');
	}else if(commandName === "방구대장"){
		await interaction.reply('뿡뿡이')
	}else if (commandName === "서버"){
		await interaction.reply(`서버이름 : ${interaction.guild.name} \n 서버인원 : ${interaction.guild.memberCount}`)
	} else if (commandName === '유저') {
		await interaction.reply(`유저태그 : ${interaction.user.tag}\n유저 아이디: ${interaction.user.id}`);
	}
});


// Login to Discord with your client's token
client.login(token);