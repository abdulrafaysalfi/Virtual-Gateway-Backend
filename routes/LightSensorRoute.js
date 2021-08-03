const express = require("express");
const LightSensor = require("../models/LightSensor");
const router = express.Router();

//GET
router.get("/", (req, res) => {
  LightSensor.find({}, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//GET by id
router.get("/:id", (req, res) => {
  LightSensor.findById(req.params.id, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//POST
router.post("/", (req, res) => {
  const lightsensor = new LightSensor({
    stat: req.body.stat,
  });
  lightsensor.save((err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});
//PUT
router.put("/:id", (req, res) => {
  LightSensor.updateOne(
    { _id: req.params.id },
    {
      $set: {
        stat: req.body.stat,
      },
    },
    (err, data) => {
      if (err) console.log(err);
      else res.status(200).send(data.n + ` record Updated`);
    }
  );
});
//PATCH
router.patch("/:id", (req, res) => {
  LightSensor.updateOne(
    { _id: req.params.id },
    {
      $set: {
        stat: req.body.stat,
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
  LightSensor.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).send(data.n + ` record Deleted`);
  });
});

module.exports = router;
