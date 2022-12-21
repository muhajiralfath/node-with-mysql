const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/post");
});

router.get("/post", function (req, res) {
  res.render("posts-list");
});

module.exports = router;
