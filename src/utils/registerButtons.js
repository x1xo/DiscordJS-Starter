const path = require('node:path');
const fs = require('node:fs');

function registerButtons(client, dir="/../buttons"){
    
    const buttonsPath = path.join(__dirname, dir);
    const buttonEntries = fs.readdirSync(buttonsPath);

    for (const entry of buttonEntries) {
        if(entry.split(".").length <= 1 || !entry.endsWith('.js')) {
            registerButtons(client, `${dir}/${entry}`);
            continue;
        }
        
        const buttonPath = path.join(buttonsPath, entry);
        const button = require(buttonPath);

        if('id' in button && 'execute' in button) {
            client.buttons.set(button.id, button)
        } else {
            console.log(`[WARNING] The button at ${buttonPath} is missing a required "id" or "execute" property.`);
        }
    }

}

module.exports = registerButtons;