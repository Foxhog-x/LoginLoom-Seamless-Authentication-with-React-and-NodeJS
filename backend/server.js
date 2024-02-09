require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
const multerErrorHandler = require("./middlewares/multerMiddleware");

// mongoose.connect(process.env.MONGODB_URL);
// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "users",
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL server: " + err.stack);
//     return;
//   }
//   console.log("Connected to MySQL server as id " + connection.threadId);
// });

//for mongodb connection
// const db = mongoose.connection;

// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("connected to db"));

app.use(cors());
app.use(express.json());

app.use("/adduser", require("./routes/signupRoute"));
app.use("/login", require("./routes/loginRoute"));
app.use("/userdetails", require("./routes/userDetails"));
app.use("/upload", require("./routes/api/uploadFile"));
app.use(multerErrorHandler);
app.listen(8000, () => {
  console.log("listening on 8000");
});
