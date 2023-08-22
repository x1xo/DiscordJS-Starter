const { Events, BaseInteraction } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
    /**
     * @param {BaseInteraction} interaction 
     */
	async execute(interaction) {
		if(interaction.isChatInputCommand()){
            await interaction.deferReply({ephemeral: true})
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
                }
            }
        } else if(interaction.isButton()){
            const button = interaction.client.buttons.get(interaction.customId);
            
            if (!button) {
                console.error(`No button matching ${interaction.customId} was found.`);
                return;
            }

            try {
                await button.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'There was an error while handling button!', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'There was an error while handling button!', ephemeral: true });
                }
            }
        } else if(interaction.isModalSubmit()){
            const modal = interaction.client.modals.get(interaction.customId);
            
            if (!modal) {
                console.error(`No modal matching ${interaction.customId} was found.`);
                return;
            }

            try {
                await modal.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'There was an error while handling modal submit!', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'There was an error while handling modal submit!', ephemeral: true });
                }
            }
        }
	},
};