const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controller/otherController");

router.post("/sendEmail", sendEmail);

module.exports = router;
