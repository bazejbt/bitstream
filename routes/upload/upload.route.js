const router = require('express').Router();
const uploadController = require('../../controllers/upload.controller');

router.post('/api/upload-cv', uploadController.postUploadFile);

module.exports = router;
