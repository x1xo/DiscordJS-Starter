const { SlashCommandBuilder, CommandInteraction } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responds with Pong!"),
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        //We use editReply because we deferred a reply in 
        //the interaction event handler because we need to respond
        //in less than 3 seconds.
        interaction.editReply({ content: "Pi!ng!", ephemeral: true });
    }
}