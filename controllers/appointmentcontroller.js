const db = require('../config/db');

const bookAppointment = async (req, res) => {
    const { patient_id, doctor_id, appointment_date, appointment_time } = req.body;
    try {
        const query = `INSERT INTO Appointments (patient_id, doctor_id, appointment_date, appointment_time, status) 
                       VALUES (?, ?, ?, ?, 'scheduled')`;
        await pool.execute(query, [patient_id, doctor_id, appointment_date, appointment_time]);
        res.status(201).send('Appointment booked successfully');
    } catch (error) {
        res.status(500).send('Error booking appointment');
    }
};

module.exports = { bookAppointment };
