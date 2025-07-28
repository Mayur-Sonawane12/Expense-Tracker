import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
    const [credentials , setCredentials] = useState({email:'',password:''});
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleChange= (e) =>{

        setCredentials(
            {...credentials,[e.target.name]:e.target.value});
    }
    const handleSubmit = async(e)=>{

        e.preventDefault();

        await login(credentials.email , credentials.password);

        navigate('/dashboard');
    }

  return (
    <div>
        <h2>Login User.</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Enter Email' 
            onChange={handleChange} required className='mb-3'/> <br />

            <input type="password" name='password' 
            placeholder='Enter Password' 
            onChange={handleChange} required className='mb-3'/> <br />

            <button type='submit' className='btn btn-primary'>Login</button>
        </form>
      
    </div>
  )
}

export default Login