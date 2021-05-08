const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
//GET
router.get("/", (req, res) => {
  User.find({}, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});

//GET by id
router.get("/:id", (req, res) => {
  User.findById(req.params.id, { __v: 0 }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});
//POST Register
router.post("/register", async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email Already Exists");

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);

  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });
  user.save((err, data) => {
    if (err) console.log(err);
    else res.status(200).json(data);
  });
});
//LOGIN
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Email ");

  const validPass = await bcryptjs.compare(req.body.password, user.password);
  if (!validPass) return res.json("Invalid Password");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.status(200).json(token);
});
//PUT
router.put("/:id", (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        email: req.body.email,
        password: req.body.password,
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
  User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        email: req.body.email,
        password: req.body.password,
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
  User.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) console.log(err);
    else res.status(200).send(data.n + ` record Deleted`);
  });
});
module.exports = router;
