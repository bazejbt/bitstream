const { prototype } = require('../models/Upload.model');

exports.postUploadFile = (req, res, next) => {
  prototype
    .getFileContentsAsync(req.body.fileName)
    .then((response) => {
      res.status(200).send(JSON.stringify(response));
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
