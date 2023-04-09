const { SlashCommandBuilder, CommandInteraction } = require("discord.js");
const client = require("..");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reload")
        .setDescription("Reloads a command.")
        .addStringOption(option =>
            option
                .setName("command")
                .setDescription("The name of the command to reload.")
                .setRequired(true)
        ),
    /**
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        let commandCached = interaction.client.commands.get(interaction.options.get("command").value);
        
        if (!commandCached) 
            return interaction.editReply({ content: "That command doesn't exist.", ephemeral: true });
        
        try {
            interaction.client.commands.delete(commandCached.name);
            delete require.cache[require.resolve(commandCached.path)];
            const command = require(commandCached.path);
            interaction.client.commands.set(command.data.name, command);
            await interaction.editReply({ content: `Reloaded \`${command.data.name}\` command.`, ephemeral: true });
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    }
}