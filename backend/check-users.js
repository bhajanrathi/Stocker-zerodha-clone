require('dotenv').config();
const mongoose = require('mongoose');
const { UsersModel } = require('./models/UsersModel');

const checkUsers = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');

    // Get all users
    const users = await UsersModel.find({});
    console.log('All users in database:');
    users.forEach(user => {
      console.log({
        email: user.email,
        username: user.username,
        createdAt: user.createdAt
      });
    });

  } catch (error) {
    console.error('Error checking users:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

checkUsers(); 