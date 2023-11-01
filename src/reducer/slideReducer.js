function slideReducer(state, action) {
  switch (action.type) {
    case 'LIKE':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isLiked: true };
        }
        return item;
      });

    case 'LIKE_CANCEL':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isLiked: false };
        }
        return item;
      });

    default:
      return state;
  }
}

export default slideReducer;
