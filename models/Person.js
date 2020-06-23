const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Person", PersonSchema);
