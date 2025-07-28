import React, { useContext } from 'react'
import {Link , useNavigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const {user , logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout =()=>{
    logout();
    navigate('/login')
  }

  return (
    <div>
      <nav style={{padding:'10px' , background:'#eee',display:'flex',
        justifyContent:'space-between'}}>
          <div>
            <Link to={"/dashboard"} style={{marginRight:'15px'}}> Dashboard</Link>
              {!user && (
                <>
                 <Link to={'/register'} style={{marginRight:'10px'}}>Register</Link>
                 <Link to={'/login'}>Login</Link>
                </>
              )}
          </div>
          <div>
            {user && (
              <>
               <span style={{marginRight:'10px'}}>Welcome,{user.name} to your Profile..! </span>
               <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
              </>
            )

            }
          </div>
      </nav>
    </div>
  )
}

export default Navbar