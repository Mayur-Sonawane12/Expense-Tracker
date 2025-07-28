import React, { useEffect, useState } from 'react';
import axios  from 'axios';

const Transaction = () => {
    const [transactions , setTransactions] = useState([]);
    useEffect(()=>{
        const fetchTransactions = async()=>{
            const token =  localStorage.getItem('token');
            const res = await 
            axios.get('http://localhost:5000/api/transactions/gettransaction',{
                headers:{Authorization:`Bearer ${token}`},
            });
            setTransactions(res.data);
             
        };
        fetchTransactions();
    },[])
  return (
    <div>
      <h2 className='text text-success'>Total Transactions</h2>
        <ul>
             {transactions.map((x)=>(
            <li key={x._id}>
                {x.category} : {x.type} -  ₹{x.amount}
            </li>
        ))}

        </ul>
   
    </div>
  )
}

export default Transaction