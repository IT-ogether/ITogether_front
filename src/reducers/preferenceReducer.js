const preferenceReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET-PREFERENCE':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default preferenceReducer;
