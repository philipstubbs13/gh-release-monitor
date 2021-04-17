import { Actions } from './constants';

export default (state, action) => {
  switch (action.type) {
    case Actions.GetRepos:
      return {
        ...state,
        repos: action.payload,
      };
    case Actions.GetReleases:
      return {
        ...state,
        releases: action.payload,
      };
    default:
      return state;
  }
};
