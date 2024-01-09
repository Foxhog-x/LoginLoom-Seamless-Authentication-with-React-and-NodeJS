require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to db"));

app.use(cors());
app.use(express.json());

app.use("/adduser", require("./routes/userRoute"));
app.use("/login", require("./routes/loginRoute"));
app.use("/createuser", require("./routes/createUserRoute"));

app.listen(8000, (req, res) => {
  console.log("listening on 8000");
});
