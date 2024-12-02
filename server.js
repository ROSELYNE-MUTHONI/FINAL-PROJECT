const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path module

const patientRoutes = require('./routes/patients');
const doctorRoutes = require('./routes/doctors');
const appointmentRoutes = require('./routes/appointments');

const app = express(); // Define app here
const PORT = process.env.PORT || 3300;

// Middleware
app.use(cors()); // Allow all origins
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    session({
        secret: 'telemedicine_secret',
        resave: false,
        saveUninitialized: false,
    })
);

// Routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle patient registration
app.post('/patients/register', (req, res) => {
    // Logic to handle registration
    res.status(201).json({ message: 'Patient registered successfully!' });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


