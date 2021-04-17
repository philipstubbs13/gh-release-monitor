export default (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [],
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
