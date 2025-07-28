import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// // File Import
import authRoutes from './routes/authRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes 
app.use('/api/auth' , authRoutes);
app.use('/api/transactions' , transactionRoutes);

// DB connection 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("------MongoDB Connected ...!---------");
    
})
.catch((err)=>{
    console.log(`DB connection Error, ${err}`);
    
})
app.listen(5000);