var mongoose = require("mongoose");

var instructorSchema = new mongoose.Schema({
    name: String,
    todos: [{
        type: mongoose.Schema.types.ObjectId,
        ref: "Todo"
    }]
})

var Instructor = mongoose.model('Instructor', instructorSchema)

module.exports = Instructor