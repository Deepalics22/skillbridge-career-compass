import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Loads environment variables from .env file

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      console.error("Mongo URI is missing in environment variables.");
      process.exit(1); // Terminate the server if Mongo URI is missing
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Terminate the server if the connection fails
  }
};

export default connectDB;
