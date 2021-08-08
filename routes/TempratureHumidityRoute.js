const express = require("express");
const TempratureHumiditySensor = require("../models/TempratureHumiditySensor");
const router = express.Router();


//GET
router.get("/", (req, res) => {
  TempratureHumiditySensor.find({}, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//GET by id
router.get("/:id", (req, res) => {
  TempratureHumiditySensor.findById(req.params.id, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//POST
router.post("/", (req, res) => {
  const sensordata = new TempratureHumiditySensor({
    celsius: req.body.celsius,
    fahrenheit: req.body.fahrenheit,
    humidity: req.body.humidity,
  });
  sensordata.save((err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});
//PUT
router.put("/:id", (req, res) => {
  TempratureHumiditySensor.updateOne(
    { _id: req.params.id },
    {
      $set: {
        celsius: req.body.celsius,
        fahrenheit: req.body.fahrenheit,
        humidity: req.body.humidity,
        
      },
    },
    (err, data) => {
      if (err) console.log(err);
      else res.status(200).send(data);
    }
  );
});
//PATCH
router.patch("/:id", (req, res) => {
  TempratureHumiditySensor.updateOne(
    { _id: req.params.id },
    {
      $set: {
        celsius: req.body.celsius,
        fahrenheit: req.body.fahrenheit,
        humidity: req.body.humidity,
            
      },
    },
    (err, data) => {
      if (err) console.log(err);
      else res.status(200).send(data.n + ` record Updated`);
    }
  );
});
//Delete
router.delete("/:id", (req, res) => {
  TempratureHumiditySensor.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).send(data.n + ` record Deleted`);
  });
});

module.exports = router;
