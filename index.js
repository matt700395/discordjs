// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

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
	}
});


// Login to Discord with your client's token
client.login(token);