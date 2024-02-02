const multer = require("multer");
const multerErrorHandler = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.json({
        status: 413,
        message: "File is too large Please select only less than 2MB SIZE",
      });
    } else if (error.code === "LIMIT_FILE_COUNT") {
      return res.json({
        status: 429,
        message: "Too many Files, Select only 2",
      });
    } else if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.json({ status: 422, message: "File must be an Image" });
    }
  }
};
module.exports = multerErrorHandler;
