// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Sample user data (In a real application, use a database)
const users = [
    { username: 'test1', password: 'test1' },
    { username: 'user2', password: 'password2' },
    { username: 'ruma', password: 'ruma@123' },
    { username: 'rt', password: 'rt1' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check user credentials
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return res.status(200).json({ success: true, username: user.username });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});