const mongoose = require("mongoose");

const LightSensorSchema = mongoose.Schema({
  stat: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("lightsensor", LightSensorSchema);
