import React, { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const AppContext = createContext();
import { GITHUB_API_BASE_URL } from '../constants';
import { Actions } from './constants';
import { IAppState, IAppContext } from './types';

// eslint-disable-next-line react/prop-types
export function AppWrapper({ children }) {
  const initialState: IAppState = {
    getReposForOrganizationError: '',
    isLoadingReleases: true,
    releases: [],
    releasesMarkedSeen: [],
    repos: [],
    searchError: '',
    searchTerm: 'microsoft',
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getReposByOrg() {
    if (state.searchTerm.trim().length === 0) {
      dispatch({
        type: Actions.SetSearchError,
        error: 'Nothing entered in search field. Enter the organization you want to track.',
      });

      return;
    }
    const url = `${GITHUB_API_BASE_URL}/orgs/${state.searchTerm}/repos`;
    const response = await fetch(url);

    if (response.status === 200) {
      const repos = await response.json();

      dispatch({
        type: Actions.GetRepos,
        payload: repos,
      });
    }

    if (response.status === 404) {
      dispatch({
        type: Actions.OrganizationNotFound,
        error: `Organization ${state.searchTerm} not found. Double check that the organization is spelled correctly and matches the organization name displayed in GitHub.`,
      });
    }
  }

  async function getReleases(organization: string, repo: string) {
    const url = `${GITHUB_API_BASE_URL}/repos/${organization}/${repo}/releases`;
    const response = await fetch(url);
    const releases = await response.json();

    dispatch({
      type: Actions.GetReleases,
      payload: releases,
    });
  }

  function markSeen(releaseId: number) {
    dispatch({
      type: Actions.MarkSeen,
      payload: releaseId,
    });
  }

  function setSearchTerm(newValue: string | null) {
    dispatch({
      type: Actions.SetSearchTerm,
      value: newValue,
    });
  }

  return (
    <AppContext.Provider value={{ state, getReposByOrg, getReleases, markSeen, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): IAppContext {
  return useContext(AppContext);
}
