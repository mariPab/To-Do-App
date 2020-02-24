const express = require('express');

const app = express();

const server = app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

app.use((req, res) => {
    res.status(404).send({ message: 'not found...'});
});