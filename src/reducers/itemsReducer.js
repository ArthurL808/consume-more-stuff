import { LOAD_ITEMS, LOAD_USERS, ADD_ITEM } from "../actions";

const initialState = {
  items: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      // console.log(action);
      return { ...state, items: action.payload };
    case LOAD_USERS:
      return action.payload;
      case ADD_ITEM:
        const items = state.items.concat(action.payload)
        return {items}
    default:
      return state;
  }
};

export default itemsReducer