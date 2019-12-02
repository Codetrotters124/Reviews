const express = require("express");
const db = require("../database/index.js");
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("client/dist"));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
