const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const webhookRoutes = require("./routes/webhook");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/webhook", webhookRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
