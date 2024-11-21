const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');  // Import routes for users

const app = express();

// Middleware to parse JSON request body
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Social Media API!');
});


// Connect to MongoDB
mongoose.connect('mongodb://localhost/socialmedia', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection error:', err));

// Use user routes with the prefix "/api/users"
app.use('/api/users', userRoutes);  // This will handle routes like '/api/users/register'

// Server listening on port 5000
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
