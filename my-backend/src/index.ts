import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db'; // Ensure this is pointing to the correct file
import userRoutes from './routes/user';

dotenv.config(); // Loads environment variables from .env file
connectDB(); // Establish the DB connection

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the user routes for signup, login, etc.
app.use('/api', userRoutes);

// Default port or the one from the environment variables
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
