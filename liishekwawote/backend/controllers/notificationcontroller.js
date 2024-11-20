const pool = require('../config/db');

// Fetch notifications for a specific user
exports.getNotifications = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching notifications' });
  }
};

// Mark notification as viewed
exports.markAsViewed = async (req, res) => {
  const { notificationId } = req.params;
  try {
    await pool.query('UPDATE notifications SET viewed = TRUE WHERE id = $1', [notificationId]);
    res.json({ message: 'Notification marked as viewed' });
  } catch (error) {
    res.status(500).json({ error: 'Error marking notification as viewed' });
  }
};

// Send new notification
exports.sendNotification = async (userId, message) => {
  try {
    await pool.query(
      'INSERT INTO notifications (user_id, message) VALUES ($1, $2)',
      [userId, message]
    );
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
