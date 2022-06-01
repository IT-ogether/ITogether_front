const userNameReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET-USERNAME':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default userNameReducer;
