const mongoose = require("mongoose");

const LDRSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ldr", LDRSchema);
