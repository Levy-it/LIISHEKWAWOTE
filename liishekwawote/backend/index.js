require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Import routes
const authRoutes = require('./routes/authroutes');
const foodRoutes = require('./routes/foodroutes');
const reportRoutes = require('./routes/reportroutes');
const notificationRoutes = require('./routes/notificationroutes');


// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/notifications', notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${5000}`);
});
