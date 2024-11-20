const express = require('express');
const { getNotifications, markAsViewed } = require('../controllers/notificationcontroller');
const router = express.Router();

router.get('/:userId', getNotifications);
router.put('/:notificationId/view', markAsViewed);

module.exports = router;
