const { Events } = require('discord.js');

const deployCommands = require('../utils/deployCommands');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
	    console.log(`[Bot] Logged in as ${client.user.tag}`);
        
        deployCommands(client);
	},
};