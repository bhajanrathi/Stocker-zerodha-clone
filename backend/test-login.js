require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { UsersModel } = require('./models/UsersModel');

const testLogin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');

    // Find the existing user
    const user = await UsersModel.findOne({ email: 'testing@gmail.com' });
    if (!user) {
      console.log('User not found');
      return;
    }

    console.log('Found user:', {
      email: user.email,
      username: user.username,
      hasPassword: !!user.password
    });

    // Test password comparison
    const testPasswords = ['password123', 'test123', 'password', 'test'];
    
    for (const password of testPasswords) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(`Password "${password}": ${isMatch ? 'MATCH' : 'NO MATCH'}`);
    }

  } catch (error) {
    console.error('Error testing login:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

testLogin(); 