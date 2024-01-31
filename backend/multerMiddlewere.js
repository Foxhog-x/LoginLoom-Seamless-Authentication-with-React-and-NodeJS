const multer = require("multer");
const multerErrorHandler = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.json({ message: "file is to large" });
    } else if (error.code === "LIMIT_FILE_COUNT") {
      return res.json({ message: "Too many Files" });
    } else if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.json({ message: "File must be an Image" });
    }
  }
};
module.exports = multerErrorHandler;
