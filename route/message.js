const express = require("express");
const router = express.Router();
const Message = require("../model/message");

router.post("/", (req, res) => {
  const message = new Message({
    ...req.body,
  });

  message
    .save()
    .then(() => {
      res.status(201).json({ message: "Objet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

module.exports = router;
