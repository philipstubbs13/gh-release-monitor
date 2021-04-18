/* eslint-disable no-unused-vars */
export interface IAppState {
  getReposForOrganizationError: string;
  isLoadingReleases: boolean;
  recentSearches: string[];
  releases: any[];
  releasesMarkedSeen: number[];
  repos: any[];
  searchError: string;
  searchTerm: string;
}

export interface IAppContext {
  clearSearchHistory: () => void;
  getRecentSearches: () => void;
  getReleases: (organization: string | string[], repo: string | string[]) => void;
  getReposByOrg: () => void;
  getSeenReleases: () => void;
  markSeen: (releaseId: number) => void;
  setSearchTerm: (event) => void;
  state: IAppState;
}
