require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const multerErrorHandler = require("./multerMiddlewere");

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to db"));

app.use(cors());
app.use(express.json());

app.use("/adduser", require("./routes/signupRoute"));
app.use("/login", require("./routes/loginRoute"));
app.use("/userdetails", require("./routes/userDetails"));
app.use("/upload", require("./routes/api/uploadFile"));
// app.use((error, req, res, next) => {
//   if (error instanceof multer.MulterError) {
//     if (error.code === "LIMIT_FILE_SIZE") {
//       return res.json({ message: "file is to large" });
//     }
//   }
// });
app.use(multerErrorHandler);
app.listen(8000, () => {
  console.log("listening on 8000");
});
