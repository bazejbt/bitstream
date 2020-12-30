const mammoth = require('mammoth');
const path = require('path');
class UploadModel {
  constructor() {}

  getFileContentsAsync(fileName) {
    return mammoth.convertToHtml({
      path: path.join(__dirname, fileName),
    });
  }
}

module.exports = UploadModel;
