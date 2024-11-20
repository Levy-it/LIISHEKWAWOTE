const express = require('express');
const { getFoods, addFood } = require('../controllers/foodcontroller');
const router = express.Router();

router.get('/', getFoods);
router.post('/', addFood);

module.exports = router;
