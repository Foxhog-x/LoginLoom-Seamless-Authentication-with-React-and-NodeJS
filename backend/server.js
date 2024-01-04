const express = require("express");
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  res.send("server is running ");
});

app.listen(5500, () => {
  console.log("listening on the port 5500");
});
