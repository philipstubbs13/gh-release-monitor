export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
      };
    case 'MESSAGE_ERROR':
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};
