/* eslint-disable no-unused-vars */
export enum Actions {
  AddToFavorites = 'ADD_TO_FAVORITES',
  GetFavoriteReleases = 'GET_FAVORITE_RELEASES',
  GetRepos = 'GET_REPOS',
  GetReleases = 'GET_RELEASES',
  MarkSeen = 'MARK_SEEN',
  OrganizationNotFound = 'ORGANIZATION_NOT_FOUND',
  SetSearchError = 'SET_SEARCH_ERROR',
  SetSearchTerm = 'SET_SEARCH_TERM',
  GetSeenReleases = 'GET_SEEN_RELEASES',
  GetRecentSearches = 'GET_RECENT_SEARCHES',
  RemoveFromFavorites = 'REMOVE_FROM_FAVORITES',
  ErrorFetchingRepos = 'ERROR_FETCHING_REPOS',
}

export enum DatabaseStoreNames {
  FavoriteReleases = 'grm_favorite_releases',
  RecentSearches = 'grm_recent_searches',
  SeenReleases = 'grm_seen_releases',
}

export const DATABASE_STORE_ID = 'gh-release-monitor1313';
