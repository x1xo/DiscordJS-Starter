const { REST, Routes } = require('discord.js');

module.exports=function deployCommands(client) {

	let commands = client.commands.map((val) => val.data.toJSON())

	const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

	(async () => {
		try {
			console.log(`Started refreshing ${commands.length} application (/) commands.`);

			const data = await rest.put(
				process.env.NODE_ENV==="production"?
					Routes.applicationCommands(client.user.id) : 
					Routes.applicationGuildCommands(client.user.id, process.env.DEV_GUILD),
				{ body: commands },
			);

			console.log(`Successfully reloaded ${data.length} application (/) commands.`);
		} catch (error) {
			console.error("Error while deploying commands: " + error.stack);
		}
	})();
	
}
