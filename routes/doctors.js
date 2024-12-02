const express = require('express');
const router = express.Router();
const { addDoctor, getDoctors } = require('../controllers/doctorController');

// Add a new doctor (admin only)
router.post('/add', addDoctor);

// Get all doctors
router.get('/', getDoctors);

module.exports = router;
