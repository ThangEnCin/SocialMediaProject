const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path as needed

// MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/socialmedia';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        return User.find(); // Query all users
    })
    .then(users => {
        console.log('Users:', users);
        mongoose.disconnect(); // Disconnect after fetching
    })
    .catch(error => {
        console.error('Error:', error);
        mongoose.disconnect();
    });
