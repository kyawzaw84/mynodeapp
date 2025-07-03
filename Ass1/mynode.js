const express = require('express');
const app = express();

// Use the port Render gives you or default to 3000 locally
const port = process.env.PORT || 3000;

// Basic route for root URL
app.get('/', (req, res) => {
    res.send('Hello!! This is my first Assignment');
});

// Start the server and listen on the port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
