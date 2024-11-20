const pool = require('../config/db');

// Get all food items
exports.getFoods = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM food');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching food items' });
  }
};

// Add a new food item
exports.addFood = async (req, res) => {
  const { name, category, quantity, expiration_date, donor_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO food (name, category, quantity, expiration_date, donor_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, category, quantity, expiration_date, donor_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error adding food item' });
  }
};

const { sendNotification } = require('../controllers/notificationcontroller');

// In your foodController addFood function
await sendNotification(adminUserId, 'A new donation has been added. Please review it.');
