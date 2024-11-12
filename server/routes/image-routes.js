const express = require('express');
const { imageUpload, imageDelete } = require('../controllers/image-controller');
const multer = require('multer');
const uniqid = require('uniqid');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, uniqid() + '_' + file.originalname);
  },
});

const uploadMW = multer({ storage: storage });

router.post('/', uploadMW.single('image'), imageUpload);

router.delete('/:id', imageDelete);

module.exports = router;
