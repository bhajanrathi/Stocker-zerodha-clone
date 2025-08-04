require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { UsersModel } = require('./models/UsersModel');

const createTestUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');

    // Check if test user already exists
    const existingUser = await UsersModel.findOne({ email: 'test@example.com' });
    if (existingUser) {
      console.log('Test user already exists');
      return;
    }

    // Create test user
    const hashedPassword = await bcrypt.hash('password123', 12);
    const testUser = await UsersModel.create({
      email: 'test@example.com',
      username: 'test_user',
      password: hashedPassword,
      createdAt: new Date()
    });

    console.log('Test user created successfully:', {
      email: testUser.email,
      username: testUser.username
    });

  } catch (error) {
    console.error('Error creating test user:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

createTestUser(); 