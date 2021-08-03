const mongoose = require("mongoose");

const THSensorSchema = mongoose.Schema({
  celsius: {
    type: String,
    required: true,
  },
  fahrenheit : {
    type: String,
    required: true,
  },
  humidity: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("tempraturehumiditysensor", THSensorSchema);
