const express = require("express");
const router = express.Router();

router.post("/save", (req, res) => {
  console.log(req.body);
  res.json({
    status: "ok",
    msg: "data recevied successfully"
  });
});

module.exports = router;
