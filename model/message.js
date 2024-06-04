const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  descriptif: { type: String, required: true },
});

module.exports = mongoose.model("Message", messageSchema);
