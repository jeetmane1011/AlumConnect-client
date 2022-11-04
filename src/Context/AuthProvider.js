import React, { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  
  async function login (email, password){
    try{
      const { data } = await axios.post("/api/user/login",
        { email, password },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser(data);
      navigate('/');
    }catch(err){
      throw err;
    }
  }

  function logout(){
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/");
  }

  async function signUp(name, email, password, pic ){
    try{
      const { data } = await axios.post("/api/user",
        { name, email, password, pic },
        config
    );
    localStorage.setItem("userInfo", JSON.stringify(data));
    setUser(data);
    navigate("/");
    }catch(err){
      throw err;
    }
  }

  async function fetchUserDetails(userid, privConfig){
    try{
      const {data} = await axios.get(
        `/api/user/${userid}`,
        privConfig
      );
      return data;
    }catch(err){
      navigate("/");
      throw err;
    }
  }

  return (
    <AuthContext.Provider value={{user, setUser, login, logout, signUp, fetchUserDetails}}>
      {children}
    </AuthContext.Provider>
  )
};