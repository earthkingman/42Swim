import express, { Request, Response, NextFunction } from "express";
import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const path = require("path");
const multer = require("multer");
const multerS3 = require('multer-s3');

const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY
const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey
})


let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "coding-dictionary",
    key: function (req, file, cb) {
      let extension = path.extname(file.originalname);
      cb(null, Date.now().toString() + extension)
    },
    acl: 'public-read-write',
  })
})

router.post('/upload', upload.single("imgFile"), function(req : Request, res : Response, next : NextFunction){
  let imgFile = req.file;
  res.json(imgFile);
})

// router.get('/upload', function(req, res, next) {
//   res.render('upload');
// });

export default router;