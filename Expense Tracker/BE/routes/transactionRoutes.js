import express from 'express';
import Transaction from '../models/Transaction.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
// Add Transaction 
router.post('/addtransaction',authMiddleware,  async(req,res)=>{
    const {type,amount,category} = req.body;

    const newTransaction = new Transaction({
        type,amount,category ,
        userId : req.user.id
    });

    try {
        await newTransaction.save();
        res.json(newTransaction);
    } catch (error) {
        res.status(404).json({
            message:"Error while Adding Transaction Details..!"
        });
    }
})

// Get Transaction Data 
router.get('/gettransaction',authMiddleware,async (req,res)=>{
    try {
        const transaction = await Transaction.find({
            userId :req.userId
        });
        res.json(transaction);
    } catch (error) {
        res.status(402).json({
            message: "Error while Fetching Trasaction Details"
        });
    }
})
export default router;
