const express = require("express");
const router = express.Router();
const { sendQuotationEmail } = require("../services/emailService");

router.post("/", async (req, res) => {
  const record = req.body.record;

  try {
    await sendQuotationEmail(record);
    res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error("Email failed:", error);
    res.status(500).send("Failed to send email.");
  }
});

module.exports = router;
