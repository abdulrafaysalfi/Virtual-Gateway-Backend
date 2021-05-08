const express = require("express");
const VirtualGateway = require("../models/VirtualGateway");
const router = express.Router();
const randomMac = require("random-mac");

//GET
router.get("/", (req, res) => {
  VirtualGateway.find({}, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//GET by id
router.get("/:id", (req, res) => {
  VirtualGateway.findById(req.params.id, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//POST
router.post("/", (req, res) => {
  const virtualGateway = new VirtualGateway({
    label: req.body.label,
    macAddress: randomMac(),
    createdBy: req.body.createdBy,
  });
  virtualGateway.save((err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});
//PUT
router.put("/:id", (req, res) => {
  VirtualGateway.updateOne(
    { _id: req.params.id },
    {
      $set: {
        label: req.body.label,
        //macAddress: randomMac(),
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
  VirtualGateway.updateOne(
    { _id: req.params.id },
    {
      $set: {
        label: req.body.label,
        //macAddress: randomMac(),
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
  VirtualGateway.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).send(data.n + ` record Deleted`);
  });
});

module.exports = router;
