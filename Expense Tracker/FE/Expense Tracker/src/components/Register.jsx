import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
 const [user,setUser] = useState({name:'',email:'',password:''});
 const navigate = useNavigate();
 
 const handleChange=(e)=>{
    setUser({
        ...user , [e.target.name]:e.target.value});
 }

 const handleSubmit = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register",user
     );
    navigate('/login');
 }
  return (
    <div>
        <h2 className='text-success'>Register User.</h2>
        <br />
        <form onSubmit={handleSubmit}>
          
          <input type="text" name='name' 
           placeholder='Enter Name' onChange={handleChange} required className='mb-3' autoComplete='name'/> <br />

          <input type="email"name='email' 
           placeholder='Enter Email Id' onChange={handleChange} required
           className='mb-3' autoComplete='email'/> <br />

          <input type="password"name='password'
           placeholder='Enter Password' onChange={handleChange} required
           className='mb-3' autoComplete='current-password'/> <br />

           <button type='submit' className='btn btn-primary'>Register</button>

        </form>
      
    </div>
  )
}

export default Register;