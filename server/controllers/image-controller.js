const fs = require('fs');
const path = require('path');

module.exports.imageUpload = async (req, res) => {
  try {
    return res
      .status(201)
      .json({ url: `http://localhost:8888/img/${req.file.filename}` });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.imageDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const publicFolderPath = path.join(__dirname, '..', 'public');
    const filePath = path.join(publicFolderPath, '/img/', id);
    fs.unlink(filePath, e => {
      if (e) throw e;
    });
    return res.status(200).json({ message: 'Image deleted succesfully' });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
