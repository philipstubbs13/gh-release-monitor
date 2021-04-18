import { Actions } from './constants';

const AppReducer = (state, action) => {
  switch (action.type) {
    case Actions.GetRepos:
      return {
        ...state,
        repos: action.payload,
      };
    case Actions.GetReleases:
      return {
        ...state,
        hasNoReleases: action.payload.length ? false : true,
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
    default:
      return state;
  }
};

export default AppReducer;
