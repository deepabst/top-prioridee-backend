const express = require('express');
const app = express();
const PORT = 3000;  //process.argv[2] to get from the cmd line

const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.listen( PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

// Mongoose DB initialisation
const mongoose = require('mongoose');
const Task = require('./models/Task'); // Task model
const { urlencoded } = require('express');

// TODO: create an env variable for this URL
mongoose.connect('mongodb://127.0.0.1/tp');
const db = mongoose.connection;

db.on('error', err => {
    console.log('Error connecting to the DB server', err);
    process.exit(1);
    // TODO: leave express server running but set global error flag
    // and respond to all HTTP requests with an error message autmatically
});

// Top PrioriDee API routes

app.get( '/', ( req, res ) => {
    console.log('Someone requested the root route /');
    res.json({ hello: 'there' });
}); // GET /

app.get('/tasks', async (req,res) => {
    const tasks = await Task.find();
    res.json(tasks);
}) // GET /tasks
