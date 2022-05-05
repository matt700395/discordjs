const fs = require('node:fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');


const commands = [
	// 	new SlashCommandBuilder().setName('야').setDescription('호'),
	// 	new SlashCommandBuilder().setName('방구대장').setDescription('뿡뿡이'),
	// 	new SlashCommandBuilder().setName('서버').setDescription('서버 정보를 봅니다!'),
	// 	new SlashCommandBuilder().setName('유저').setDescription('유저정보를 봅니다!'),
		]
		.map(command => command.toJSON());


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}


const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('성공했다 닝겐'))
	.catch(console.error);