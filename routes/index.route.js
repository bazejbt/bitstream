const router = require('express').Router();
const uploadRoutes = require('./upload/upload.route');
const notFoundRoutes = require('./404/not-found.route');

router.use(uploadRoutes);
router.use(notFoundRoutes);

module.exports = router;
