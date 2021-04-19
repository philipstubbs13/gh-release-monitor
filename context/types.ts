/* eslint-disable no-unused-vars */
export interface IAppState {
  favoriteReleases: any[];
  getReposForOrganizationError: string;
  isLoadingReleases: boolean;
  recentSearches: string[];
  releases: any[];
  releasesMarkedSeen: number[];
  repos: any[];
  searchError: string;
  searchTerm: string;
  errorFetchingRepos: string;
}

export interface IAppContext {
  addToFavorites: (release: any, organization: string | string[], repo: string | string[]) => void;
  clearSearchHistory: () => void;
  getFavoriteReleases: () => void;
  getRecentSearches: () => void;
  getReleases: (organization: string | string[], repo: string | string[]) => void;
  getReposByOrg: () => void;
  getSeenReleases: () => void;
  markSeen: (releaseId: number) => void;
  removeFromFavorites: (id: number) => void;
  setSearchTerm: (event) => void;
  state: IAppState;
}
