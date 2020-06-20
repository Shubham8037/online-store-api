const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  First_name: { type: String, required: true },
  Last_name: { type: String, required: true },
  Username: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Users", UserSchema);
