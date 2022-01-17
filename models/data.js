const mongoose = require("mongoose");

const dateSchema = mongoose.Schema({
    name: String,
    userID: String,
    lb: String,
    money: Number,
    daily: Number,

})

module.exports = mongoose.model("Data",dateSchema);