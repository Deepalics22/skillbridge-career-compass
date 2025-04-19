
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/user';
import careerRoutes from './routes/career';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api/career', careerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
