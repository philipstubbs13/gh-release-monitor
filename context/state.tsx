import React, { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const AppContext = createContext();
import { GITHUB_API_BASE_URL } from '../constants';
import { Actions, DatabaseStoreNames, DATABASE_STORE_ID } from './constants';
import { IAppState, IAppContext } from './types';
import idb from 'idb';

// eslint-disable-next-line react/prop-types
export function AppWrapper({ children }) {
  const initialState: IAppState = {
    favoriteReleases: [],
    getReposForOrganizationError: '',
    isLoadingReleases: true,
    recentSearches: [],
    releases: [],
    releasesMarkedSeen: [],
    repos: [],
    searchError: '',
    searchTerm: '',
    errorFetchingRepos: '',
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
      let recentSearches = state.recentSearches;

      if (!recentSearches.includes(state.searchTerm.trim().toLowerCase())) {
        recentSearches.push(state.searchTerm.trim().toLowerCase());
      }

      recentSearchesDB().then((db) =>
        db
          .transaction(DatabaseStoreNames.RecentSearches, 'readwrite')
          .objectStore(DatabaseStoreNames.RecentSearches)
          .put({
            recentSearches,
            id: DATABASE_STORE_ID,
          })
          .then(() => {
            dispatch({
              recentSearches,
              type: Actions.GetRepos,
              payload: repos,
            });
          })
      );

      return;
    }

    if (response.status === 404) {
      dispatch({
        type: Actions.OrganizationNotFound,
        error: `Organization ${state.searchTerm} not found. Double check that the organization is spelled correctly and matches the organization name displayed in GitHub.`,
      });

      return;
    }

    dispatch({
      type: Actions.ErrorFetchingRepos,
      error: 'Failed to get repositories for specified organization.',
    });
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
    let seenReleases = state.releasesMarkedSeen;
    if (!seenReleases.includes(releaseId)) {
      seenReleases.push(releaseId);
    }
    seenReleasesDB().then((db) =>
      db
        .transaction(DatabaseStoreNames.SeenReleases, 'readwrite')
        .objectStore(DatabaseStoreNames.SeenReleases)
        .put({
          seenReleases,
          id: DATABASE_STORE_ID,
        })
        .then(() => {
          dispatch({
            type: Actions.MarkSeen,
            payload: releaseId,
          });
        })
    );
  }

  function addToFavorites(release: any, organization: string | string[], repo: string | string[]) {
    const releaseToFavorite = { ...release, organization, repo };
    favoriteReleasesDB().then((db) =>
      db
        .transaction(DatabaseStoreNames.FavoriteReleases, 'readwrite')
        .objectStore(DatabaseStoreNames.FavoriteReleases)
        .put({
          favoriteReleases: [...state.favoriteReleases, releaseToFavorite],
          id: DATABASE_STORE_ID,
        })
        .then(() => {
          dispatch({
            type: Actions.AddToFavorites,
            payload: [...state.favoriteReleases, releaseToFavorite],
          });
        })
    );
  }

  function removeFromFavorites(id: number) {
    const filteredReleases = state.favoriteReleases.filter(
      (favoriteRelease) => favoriteRelease.id !== id
    );

    favoriteReleasesDB().then((db) =>
      db
        .transaction(DatabaseStoreNames.FavoriteReleases, 'readwrite')
        .objectStore(DatabaseStoreNames.FavoriteReleases)
        .put({
          favoriteReleases: filteredReleases,
          id: DATABASE_STORE_ID,
        })
        .then(() => {
          dispatch({
            type: Actions.RemoveFromFavorites,
            payload: filteredReleases,
          });
        })
    );
  }

  const getFavoriteReleases = () => {
    favoriteReleasesDB()
      .then((db) =>
        db
          .transaction(DatabaseStoreNames.FavoriteReleases)
          .objectStore(DatabaseStoreNames.FavoriteReleases)
          .getAll()
      )
      .then((obj) => {
        if (obj.length === 0) {
          favoriteReleasesDB()
            .then((db) => {
              const tx = db.transaction(DatabaseStoreNames.FavoriteReleases, 'readwrite');
              tx.objectStore(DatabaseStoreNames.FavoriteReleases).put({
                favoriteReleases: [],
                id: DATABASE_STORE_ID,
              });
            })
            .catch((error) => console.log(error));
        } else {
          dispatch({
            type: Actions.GetFavoriteReleases,
            payload: obj[0].favoriteReleases,
          });
        }
      });
  };

  function setSearchTerm(newValue: string | null) {
    dispatch({
      type: Actions.SetSearchTerm,
      value: newValue,
    });
  }

  const getSeenReleases = () => {
    seenReleasesDB()
      .then((db) =>
        db
          .transaction(DatabaseStoreNames.SeenReleases)
          .objectStore(DatabaseStoreNames.SeenReleases)
          .getAll()
      )
      .then((obj) => {
        if (obj.length === 0) {
          seenReleasesDB()
            .then((db) => {
              const tx = db.transaction(DatabaseStoreNames.SeenReleases, 'readwrite');
              tx.objectStore(DatabaseStoreNames.SeenReleases).put({
                seenReleases: [],
                id: DATABASE_STORE_ID,
              });
            })
            .catch((error) => console.log(error));
        } else {
          dispatch({
            type: Actions.GetSeenReleases,
            payload: obj[0].seenReleases,
          });
        }
      });
  };

  const getRecentSearches = () => {
    recentSearchesDB()
      .then((db) =>
        db
          .transaction(DatabaseStoreNames.RecentSearches)
          .objectStore(DatabaseStoreNames.RecentSearches)
          .getAll()
      )
      .then((obj) => {
        if (obj.length === 0) {
          recentSearchesDB()
            .then((db) => {
              const tx = db.transaction(DatabaseStoreNames.RecentSearches, 'readwrite');
              tx.objectStore(DatabaseStoreNames.RecentSearches).put({
                recentSearches: [],
                id: DATABASE_STORE_ID,
              });
            })
            .catch((error) => console.log(error));
        } else {
          dispatch({
            type: Actions.GetRecentSearches,
            payload: obj[0].recentSearches,
          });
        }
      });
  };

  const clearSearchHistory = () => {
    recentSearchesDB().then((db) =>
      db
        .transaction(DatabaseStoreNames.RecentSearches, 'readwrite')
        .objectStore(DatabaseStoreNames.RecentSearches)
        .put({
          recentSearches: [],
          id: DATABASE_STORE_ID,
        })
        .then(() => {
          dispatch({
            type: Actions.GetRecentSearches,
            payload: [],
          });
        })
    );
  };

  const seenReleasesDB = () =>
    idb.open(DatabaseStoreNames.SeenReleases, 1, (upgradeDb) => {
      switch (upgradeDb.oldVersion) {
        case 0:
          upgradeDb.createObjectStore(DatabaseStoreNames.SeenReleases, { keyPath: 'id' });
      }
    });

  const recentSearchesDB = () =>
    idb.open(DatabaseStoreNames.RecentSearches, 1, (upgradeDb) => {
      switch (upgradeDb.oldVersion) {
        case 0:
          upgradeDb.createObjectStore(DatabaseStoreNames.RecentSearches, { keyPath: 'id' });
      }
    });

  const favoriteReleasesDB = () =>
    idb.open(DatabaseStoreNames.FavoriteReleases, 1, (upgradeDb) => {
      switch (upgradeDb.oldVersion) {
        case 0:
          upgradeDb.createObjectStore(DatabaseStoreNames.FavoriteReleases, { keyPath: 'id' });
      }
    });

  return (
    <AppContext.Provider
      value={{
        state,
        getReposByOrg,
        getReleases,
        markSeen,
        setSearchTerm,
        getSeenReleases,
        getRecentSearches,
        clearSearchHistory,
        addToFavorites,
        removeFromFavorites,
        getFavoriteReleases,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): IAppContext {
  return useContext(AppContext);
}
