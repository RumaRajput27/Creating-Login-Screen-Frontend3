// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create the data object to send
    const data = {
        username: username,
        password: password
    };

    // Call the backend API
    fetch('http://localhost:3000/login', {
        method: 'POST', // Use POST method
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(data) // Convert data object to JSON string
    })
    .then(response => {
        // Check if the response is OK
        if (response.ok) {
            return response.json(); // Parse JSON response if successful
        } else {
            throw new Error('Login failed: ' + response.statusText); // Throw error if not OK
        }
    })
    .then(data => {
        // Handle success response
        document.getElementById('responseMessage').innerText = 'Login successful! Welcome, ' + data.username;
        document.getElementById('responseMessage').className = 'success'; // Add success class
    })
    .catch(error => {
        // Handle error response
        document.getElementById('responseMessage').innerText = 'Login failed: ' + error.message;
        document.getElementById('responseMessage').className = 'error'; // Add error class
    });
});