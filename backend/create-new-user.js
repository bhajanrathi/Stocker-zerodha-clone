require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { UsersModel } = require('./models/UsersModel');

const createNewUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');

    // Delete existing test user if exists
    await UsersModel.deleteOne({ email: 'demo@stocker.com' });

    // Create new user with known password
    const hashedPassword = await bcrypt.hash('demo123', 12);
    const newUser = await UsersModel.create({
      email: 'demo@stocker.com',
      username: 'demo_user',
      password: hashedPassword,
      createdAt: new Date()
    });

    console.log('New user created successfully:', {
      email: newUser.email,
      username: newUser.username,
      password: 'demo123' // This is the plain text password for testing
    });

  } catch (error) {
    console.error('Error creating new user:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

createNewUser(); 