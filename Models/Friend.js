const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // List of friends
    friendRequests: [{
               from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		     status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
});

module.exports = mongoose.model('Friend', friendSchema);
