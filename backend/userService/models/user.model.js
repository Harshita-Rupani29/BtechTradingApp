const mongoose = require('../utils/conn').mongoose;
const db = require('../utils/conn').db;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    default: 'password123' // Uncomment if you want a default password
  },
  createdAt: {
    type: Date,
    default: Date.now // Corrected: No parentheses
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
