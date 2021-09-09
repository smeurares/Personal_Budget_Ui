import React, { useState, useContext } from "react";
import store from "storejs";
import Axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [income, setIncome] = useState();
  const [error, setError] = useState({ error: false, message: "" });
  const [budget, setBudget] = useState(false);
  const [envelopes, setEnvelopes] = useState(false);
  const [envelopeTitle, setEnvelopeTitle] = useState("");
  const [envelopeBudget, setEnvelopeBudget] = useState("");
  const [allEnvelopes, setAllEnvelopes] = useState();

  if (income <= 0) {
    setError({ error: true, message: "Your income must be positive!" });
  }

  const login = () => {
    setLoading(true);
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
        setLoading(false);
        setIsLoggedIn(true);

        console.log(store("id"));
        console.log(store("name"));
      }
    });
  };

  const addEnvelope = () => {
    Axios({
      method: "POST",
      data: {
        budget: envelopeBudget,
        title: envelopeTitle,
        userId: store("id"),
      },
      url: "/envelopes",
    }).then((res) => {
      const response = res;
      console.log(response.data.envelopes);

      setAllEnvelopes(response.data.envelopes);
    });
  };

  const getAllEnvelopes = () => {
    Axios({
      method: "GET",
      url: `/envelopes/${store("id")}`,
    }).then((res) => {
      const response = res;
      console.log(response.data.envelopes);
      setAllEnvelopes(response.data.envelopes);
    });
  };

  const removeEnvelope = (id) => {
    Axios({
      method: "DELETE",
      url: `/envelopes/${id}`,
    }).then((res) => {
      const response = res;
      console.log(response.data.deletedEnvelope);
    });
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        loginEmail,
        loginPassword,
        setLoginEmail,
        setLoginPassword,
        loading,
        setLoading,
        income,
        setIncome,
        error,
        setError,
        budget,
        setBudget,
        envelopes,
        setEnvelopes,
        addEnvelope,
        setEnvelopeBudget,
        setEnvelopeTitle,
        envelopeTitle,
        envelopeBudget,
        getAllEnvelopes,
        allEnvelopes,
        setAllEnvelopes,
        removeEnvelope,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
