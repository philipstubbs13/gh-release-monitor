import { Actions } from './constants';
import { IAppState } from './types';

const AppReducer = (state: IAppState, action): IAppState => {
  switch (action.type) {
    case Actions.GetRepos:
      return {
        ...state,
        recentSearches: action.recentSearches,
        repos: action.payload,
        getReposForOrganizationError: '',
        searchError: '',
      };
    case Actions.GetReleases:
      return {
        ...state,
        isLoadingReleases: false,
        releases: action.payload,
      };
    case Actions.MarkSeen: {
      let updatedReleasesMarkedSeen = [...state.releasesMarkedSeen];
      if (!state.releasesMarkedSeen.includes(action.payload)) {
        updatedReleasesMarkedSeen = [...state.releasesMarkedSeen, action.payload];
      }
      return {
        ...state,
        releasesMarkedSeen: updatedReleasesMarkedSeen,
      };
    }
    case Actions.SetSearchTerm: {
      return {
        ...state,
        searchTerm: action.value,
      };
    }
    case Actions.SetSearchError: {
      return {
        ...state,
        searchError: action.error,
      };
    }
    case Actions.OrganizationNotFound: {
      return {
        ...state,
        getReposForOrganizationError: action.error,
      };
    }
    case Actions.GetSeenReleases: {
      return {
        ...state,
        releasesMarkedSeen: action.payload,
      };
    }
    case Actions.GetRecentSearches: {
      return {
        ...state,
        recentSearches: action.payload,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
