import React,{useContext} from 'react';
import Transaction from './Transaction';
import AddTransaction from './AddTransaction';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
    const {user,logout} = useContext(AuthContext);
  return (
    <div className='container'>
      <h1>Welcome,{user?.name}</h1> 
      <button className='btn btn-danger mb-4' onClick={logout}>Logout</button> <br />
      <AddTransaction /> <br /> <br /> 
      <Transaction /> <br /> <br />
    </div>
  )
}

export default Dashboard;