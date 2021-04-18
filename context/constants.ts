/* eslint-disable no-unused-vars */
export enum Actions {
  GetRepos = 'GET_REPOS',
  GetReleases = 'GET_RELEASES',
  MarkSeen = 'MARK_SEEN',
  OrganizationNotFound = 'ORGANIZATION_NOT_FOUND',
  SetSearchError = 'SET_SEARCH_ERROR',
  SetSearchTerm = 'SET_SEARCH_TERM',
  GetSeenReleases = 'GET_SEEN_RELEASES',
  GetRecentSearches = 'GET_RECENT_SEARCHES',
}

export enum DatabaseStoreNames {
  RecentSearches = 'recent_searches',
  SeenReleases = 'seen_releases',
}
