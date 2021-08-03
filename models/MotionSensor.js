const mongoose = require("mongoose");

const MotionSensorSchema = mongoose.Schema({
  stat: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("motionsensor", MotionSensorSchema);
