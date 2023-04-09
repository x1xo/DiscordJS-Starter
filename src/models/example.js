const mongoose = require('mongoose');
module.exports = mongoose.model("modelName", new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, max: 1024 },
    number: { type: Number, required: false },
    array: [{ type: String }]
}))

//You can get data from database using 
//const exampleModel = require('./models/example');
//let data = await exampleModel.findOne({ id: "example-id" }) 
//console.log(data)

//You can save data to database using
//const exampleModel = require('./models/example');
//let data = await new exampleModel({
//     id: "example-id",
//     title: "Example title",
//     description: "Example description",
//     number: 1,
//     array: ["1", "2", "3"]
// }).save();
//console.log(data);
