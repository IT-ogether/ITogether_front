const BookMarksReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET-BOOKMARK':
      state = action.payload;
      return state;
    case 'ADD-BOOKMARK':
      state.push(action.payload);
      // console.log('in');
      return state;
    case 'DEL-BOOKMARK':
      for (let i = 0; i < state.length; i++) {
        if (action.payload === state[i]) {
          state.pop(i);
          break;
        }
      }
      return state;
    default:
      return state;
  }
};

export default BookMarksReducer;
