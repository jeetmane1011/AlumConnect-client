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
    const { data } = await axios.post("/community/user/login",
      { email, password },
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(data));
    setUser(data);
    navigate("/");
  }

  function logout(){
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/");
  }

  async function signUp( name, email, password, pic ){
    const { data } = await axios.post("/community/user",
      { name, email, password, pic },
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(data));
    setUser(data);
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{user, setUser, login, logout, signUp}}>
      {children}
    </AuthContext.Provider>
  )
};