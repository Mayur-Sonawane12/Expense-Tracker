import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import {AuthProvider} from './context/AuthContext';

const App = () => {
  return (
    <section className='container'>
    <h1 className='container text-success'>This is Expense Tracker App.</h1>
     <br />
<AuthProvider>
     <BrowserRouter >
  
       <Navbar />
        <Routes>
          
           <Route path='/dashboard' element= {<Dashboard />}   />
           <Route  path='/register' element={<Register />} />
           <Route  path='/login' element = {<Login />} />

        </Routes>

     </BrowserRouter>
       </AuthProvider>

  </section>
  )
}

export default App