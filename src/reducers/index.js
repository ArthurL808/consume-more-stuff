import { LOAD_ITEMS, LOAD_USER } from "../actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return action.payload;
    case LOAD_USER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
