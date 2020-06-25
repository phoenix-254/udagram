import express = require('express');

// Create new express app instance
const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('Hello From Feed Microservice!');
});

app.listen(3000, () => {
    console.log('Feed service is running on port 3000!');
});