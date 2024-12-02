const express = require('express');
const router = express.Router();
const { registerPatient} = require('../controllers/patientcontroller');

// Register a new patient
router.post('/register', registerPatient);

// Get all patients (admin only)
//router.get('/', getPatients);

module.exports = router;

