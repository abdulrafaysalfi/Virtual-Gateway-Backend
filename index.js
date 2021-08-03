const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
//APP CONFIG
const app = express();
const UserRoute = require("./routes/UserRoute");
const VirtualGatewayRoute = require("./routes/VirtualGatewayRoute");
const MotionSensorRoute = require("./routes/MotionSensorRoute");
const TempratureHumiditySensorRoute = require("./routes/TempratureHumidityRoute");
const LightSensorRoute = require("./routes/LightSensorRoute");
dotenv.config();

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use("/api/user", UserRoute);
app.use("/api/virtualgateway", VirtualGatewayRoute);
app.use("/api/motionsensor", MotionSensorRoute);
app.use("/api/temphumidsensor", TempratureHumiditySensorRoute);
app.use("/api/lightsensor", LightSensorRoute);

//Database Connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) console.log(err);
    else console.log(`Connected to DB`);
  }
);

//PORT
const port = process.env.PORT || 5000;
app.listen(port, (err, res) => {
  if (err) console.log(err);
  else console.log(`Running on port ${port}`);
});
