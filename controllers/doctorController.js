const db = require('../config/db');

// Add a new doctor (admin)
const addDoctor = async (req, res) => {
    const { first_name, last_name, specialization, email, phone, schedule } = req.body;
    try {
        const query = `INSERT INTO Doctors (first_name, last_name, specialization, email, phone, schedule) 
                       VALUES (?, ?, ?, ?, ?, ?)`;
        await pool.execute(query, [first_name, last_name, specialization, email, phone, schedule]);
        res.status(201).send('Doctor added successfully');
    } catch (error) {
        res.status(500).send('Error adding doctor');
    }
};

// Get all doctors
const getDoctors = async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM Doctors');
        res.json(rows);
    } catch (error) {
        res.status(500).send('Error fetching doctors');
    }
};

module.exports = { addDoctor, getDoctors };
