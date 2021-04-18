import { Actions } from './constants';
import { IAppState } from './types';

const AppReducer = (state: IAppState, action): IAppState => {
  switch (action.type) {
    case Actions.GetRepos:
      return {
        ...state,
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
    default:
      return state;
  }
};

export default AppReducer;
