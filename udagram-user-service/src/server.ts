import express = require('express');

// Create new express app instance
const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('Hello From User Microservice!');
});

app.listen(4000, () => {
    console.log('User service is running on port 4000!');
});