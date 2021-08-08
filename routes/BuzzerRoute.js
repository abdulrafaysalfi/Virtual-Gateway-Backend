const express = require("express");
const Buzzer = require("../models/Buzzer");
const router = express.Router();

//GET
router.get("/", (req, res) => {
  Buzzer.find({}, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//GET by id
router.get("/:id", (req, res) => {
  Buzzer.findById(req.params.id, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//POST
router.post("/", (req, res) => {
  const sensordata = new Buzzer({
    status: req.body.status,
  });
  sensordata.save((err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});
//PUT
router.put("/:id", (req, res) => {
  Buzzer.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: req.body.status,
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
  Buzzer.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: req.body.status,
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
  Buzzer.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).send(data.n + ` record Deleted`);
  });
});

module.exports = router;
