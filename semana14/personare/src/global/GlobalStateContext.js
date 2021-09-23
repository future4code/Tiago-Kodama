import React from "react";
import GlobalContext from "./GlobalContext";


const GlobalStateContext = (props) => {

  const states = {
  };
  const setters = {
  };
  const requests = {
  };

  return (
    <GlobalContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;