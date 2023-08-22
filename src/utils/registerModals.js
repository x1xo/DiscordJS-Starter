const path = require('node:path');
const fs = require('node:fs');

function registerModals(client, dir="/../modals"){
    
    const modalsPath = path.join(__dirname, dir);
    const modalEntries = fs.readdirSync(modalsPath);

    for (const entry of modalEntries) {
        if(entry.split(".").length <= 1 || !entry.endsWith('.js')){
            registerModals(client, dir+"/"+entry);
            continue;
        }
        
        const modalPath = path.join(modalsPath, entry);
        const modal = require(modalPath);

        if('id' in modal && 'execute' in modal) {
            client.modals.set(modal.id, modal)
        } else {
            console.log(`[WARNING] The modal at ${modalPath} is missing a required "id" or "execute" property.`);
        }
    }

}

module.exports = registerModals;