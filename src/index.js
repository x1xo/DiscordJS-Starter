require('dotenv').config();

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const registerCommands = require('./utils/registerCommands');
const registerEvents = require('./utils/registerEvents');
const registerButtons = require('./utils/registerButtons');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.buttons = new Collection();

require('./utils/connectDatabase');

registerEvents(client);
registerCommands(client);
registerButtons(client);

client.login(process.env.TOKEN);

module.exports = client;