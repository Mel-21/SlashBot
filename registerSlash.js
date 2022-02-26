const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, CLIENT_ID, GUILD_ID } = require('./config.json');
const { readdirSync } = require('fs');

const commands = [];
const commandFiles = readdirSync('./SlashCommands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./SlashCommands/${file}`);
    commands.push(command.data);
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    }
    catch (error) {
        console.error(error);
    }
})();
