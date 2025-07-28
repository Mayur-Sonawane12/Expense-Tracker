import React,{useState} from 'react';
import axios from 'axios';

const AddTransaction = () => {
    const [transaction , setTransaction] = 
    useState({
        type:'Expense' ,
        amount:'',
        category:''
    });

    const handleChange =(e)=>{
        setTransaction({...transaction , 
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const token = localStorage.getItem('token');
      try{
        const payload = {...transaction,amount:Number(transaction.amount),};
        await axios.post("http://localhost:5000/api/transactions/addtransaction", payload,{
            headers:{Authorization:`Bearer ${token}`},
    });
    alert("Transaction added successfully...!");
    }catch(error){
    console.log("Add Transaction Error" , error.response?.data || error.message);
     alert("Failed to add Transaction...!");
}
    };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <select name="type" onChange={handleChange} className='mb-3'>
           
           <option value="Income">Income</option>
           <option value="Expense">Expense</option>

        </select>  <br />

        <input type="number" name='amount' placeholder='Amount'
        onChange={handleChange}  className='mb-3'/> <br />

        <input type="text" name='category' placeholder='Category'
        onChange={handleChange}  className='mb-3'/> <br />

        <button type='submit' className='btn btn-primary'>Transaction</button>

      </form>
    </div>
  )
}

export default AddTransaction;