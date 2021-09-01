import React, { useState, useContext } from 'react'
import store from "storejs";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false)
 

  const login = () => {
    setLoading(true)
    Axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/auth/login",
    }).then((res) => {
      const response = res;
      console.log(response.data);
      if (response.data.authenticated) {
        store({
          id: response.data.id,
          name: response.data.name,
          authenticated: response.data.authenticated,
        });
        setLoading(false)
        setIsLoggedIn(true)
        
        console.log(store("id"));
        console.log(store("name"));
        
      }
    });
  };

  return <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, login, loginEmail, loginPassword, setLoginEmail, setLoginPassword, loading, setLoading}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }