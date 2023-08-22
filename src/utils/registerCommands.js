const path = require('node:path');
const fs = require('node:fs');

function registerSlashCommands(client, dir="/../commands"){

    const commandsPath = path.join(__dirname, dir);
    const commandEntries = fs.readdirSync(commandsPath);
    for(const entry of commandEntries) { 
        //check for subfolders
        if(entry.split(".").length <= 1 || !entry.endsWith('.js')) {
            registerSlashCommands(client, `${dir}/${entry}`);
            continue;
        }
        //register the command
        const filePath = path.join(commandsPath, entry);
        const command = require(filePath);
        if('data' in command && 'execute' in command) {
            command.path = filePath;
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
    
}
module.exports=registerSlashCommands