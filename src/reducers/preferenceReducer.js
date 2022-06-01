const preferenceReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET-PREFERENCE':
      console.log('sibal');
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default preferenceReducer;
