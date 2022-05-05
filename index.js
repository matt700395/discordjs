// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
// GUILDS 서버를 예전에 길드라고 불렀다고함

client.commands = new Collection(); // 위에서 만든 client 객체의 메소드로 Collection 을 새로 등록한거임
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	//const { commandName } = interaction;

	// if (commandName === '야') {
	// 	await interaction.reply('호우');
	// }else if(commandName === "방구대장"){
	// 	await interaction.reply('뿡뿡이')
	// }else if (commandName === "서버"){
	// 	await interaction.reply(`서버이름 : ${interaction.guild.name} \n 서버인원 : ${interaction.guild.memberCount}`)
	// } else if (commandName === '유저') {
	// 	await interaction.reply(`유저태그 : ${interaction.user.tag}\n유저 아이디: ${interaction.user.id}`);
	// }

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


// Login to Discord with your client's token
client.login(token);