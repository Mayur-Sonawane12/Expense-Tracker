import React, {createContext,useState,useEffect} from 'react';
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    },[]);

    const login = async (email, password) => {
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
    });

    const token = res.data.token;
    console.log("Received Token:", token);

    // Check if token exists and is a valid string
    if (!token || typeof token !== "string") {
      throw new Error("Invalid or missing token");
    }

    localStorage.setItem("token", token);
    const decoded = jwtDecode(token); // Decode token
    setUser(decoded);                 // Set decoded user
    return true;
  } catch (error) {
    console.error("Login Failed:", error.message);
    return false;
  }
};

   
    const logout =()=>{
        localStorage.removeItem('token');
        setUser(null);
    }


  return (
    <AuthContext.Provider value={{user,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;