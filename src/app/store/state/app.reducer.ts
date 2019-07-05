export function reducer(state, action) {
  switch (action.type) {
    case 'THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
}
