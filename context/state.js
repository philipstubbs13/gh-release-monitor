import { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const AppContext = createContext();
import { GITHUB_API_BASE_URL } from '../constants';

// eslint-disable-next-line react/prop-types
export function AppWrapper({ children }) {
  const initialState = {
    releases: [],
    repos: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getReposByOrg() {
    const url = `${GITHUB_API_BASE_URL}/orgs/microsoft/repos`;
    const response = await fetch(url);
    const repos = await response.json();

    dispatch({
      type: 'GET_REPOS',
      payload: repos,
    });
  }

  async function getReleases(organization, repo) {
    const url = `${GITHUB_API_BASE_URL}/repos/${organization}/${repo}/releases`;
    const response = await fetch(url);
    const releases = await response.json();

    dispatch({
      type: 'GET_RELEASES',
      payload: releases,
    });
  }

  return (
    <AppContext.Provider value={{ state, dispatch, getReposByOrg, getReleases }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
