const { Schema, model } = require("mongoose");
module.exports = model(
  "CBT",
  new Schema({
    Guild: String,
    Trigger: String,
    Reply: String,
  })
);