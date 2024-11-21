const User = require('../models/User');

const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if a user with the same username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already taken" });
        }

        // Create a new user instance
        const newUser = new User({ username, email, password });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Respond with the saved user data
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createUser };
