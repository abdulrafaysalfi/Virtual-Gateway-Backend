const express = require("express");
const MotionSensor = require("../models/MotionSensor");
const router = express.Router();


//GET
router.get("/", (req, res) => {
  MotionSensor.find({}, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//GET by id
router.get("/:id", (req, res) => {
  MotionSensor.findById(req.params.id, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//POST
router.post("/", (req, res) => {
  const motionsensor = new MotionSensor({
    stat: req.body.stat,
  });
  motionsensor.save((err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});
//PUT
router.put("/:id", (req, res) => {
  MotionSensor.updateOne(
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
  MotionSensor.updateOne(
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
  MotionSensor.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).send(data.n + ` record Deleted`);
  });
});

module.exports = router;
