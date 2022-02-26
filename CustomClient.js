const { Client, Collection } = require('discord.js');

const options = {
    intents: [
        'GUILDS',
        // 'GUILD_MESSAGES',
        // 'GUILD_MESSAGE_REACTIONS',
        // 'GUILD_MEMBERS'
    ],
};

class CustomClient extends Client {
    constructor() {
        super(options);
        this.commands = new Collection();
    }
}

module.exports = { CustomClient };
