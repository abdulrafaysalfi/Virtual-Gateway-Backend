const mongoose = require("mongoose");

const VirtualGatewaySchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  macAddress: {
    type: String,
    required: false,
  },
  createdBy: {
    type: String,
    required: false,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("virtual-gateways", VirtualGatewaySchema);
