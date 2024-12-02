const bcrypt = require('bcrypt');
const db = require('../config/db');

// Register a new patient
const registerPatient = async (req, res) => {
    const { first_name, last_name, email, password, phone, date_of_birth, gender, address } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO Patients (first_name, last_name, email, password_hash, phone, date_of_birth, gender, address) 
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        await pool.execute(query, [first_name, last_name, email, hashedPassword, phone, date_of_birth, gender, address]);
        res.status(201).send('Patient registered successfully');
    } catch (error) {
        res.status(500).send('Error registering patient');
    }
};

// Get all patients (for admin)
const getPatients = async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM Patients');
        res.json(rows);
    } catch (error) {
        res.status(500).send('Error fetching patients');
    }
};

module.exports = { registerPatient, getPatients };
