import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  repos: [],
  errors: [],
  loading: true,
};

export const GlobalContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ repos: [], errors: [], loading: true }}>
      {children}
    </GlobalContext.Provider>
  );
};
