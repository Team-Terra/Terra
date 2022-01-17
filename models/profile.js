const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    
    guildID: String,
    name: String,
    userID: String,
    lb: String,
    money: Number,
    bank: Number,
    daily: Number,
    rob: Number,
    inventory: [String],
    

})

module.exports = mongoose.model("Profile",profileSchema);