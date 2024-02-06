const express = require("express");
const router = express.Router();
const multer = require("multer");
const uuid = require("uuid").v4;
const { format } = require("date-fns");

// const upload = multer({ dest: "uploads/" });
// const multiUploadByFileds = upload.fields(
//   { name: "avatar", maxCount: 1 },
//   { name: "image", maxCount: 1 }
// );

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: async (req, file, cb) => {
    console.log(file);
    const { originalname } = file;
    await originalname.toString().replace(/\s/g, "_");
    const datetime = await format(new Date(), "yyyyMMdd_HH:mm:ss_");
    const savedName = `${datetime}${uuid()}_${originalname}`;

    cb(null, savedName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2000000, files: 2 },
});

router.post("/", upload.array("file"), (req, res) => {
  res.json({ status: 201, datetime: Date.now() });
});

// router.post("/multiuploads", upload.array("file"), (req, res) => {

//   res.json({ status: "success" });
// });

// router.post("/multiuploads/max", upload.array("file", 2), (req, res) => {

//   res.json({ status: "success" });
// });

module.exports = router;
