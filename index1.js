const express = require("express");
const bodyParser = require("body-parser");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
