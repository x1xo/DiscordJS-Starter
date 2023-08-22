const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB).then(() => {
    console.log('[Database] Connected to MongoDB');
}).catch(err => {
    console.log("[Database] Error while connecting to MongoDB:\n", err)
    process.exit(1);
})
