const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/user", require("./routes/userRoute"));

app.listen(8000, (req, res) => {
  console.log("listening on 8000");
});
