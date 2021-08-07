const mongoose = require("mongoose");

const BuzzerSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("buzzer", BuzzerSchema);
