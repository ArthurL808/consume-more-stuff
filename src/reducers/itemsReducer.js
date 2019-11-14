import { LOAD_ITEMS, ADD_ITEM } from "../actions";

const initialState = {
  items: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return { ...state, items: action.payload };
      case ADD_ITEM:
        const items = state.items.concat(action.payload)
        return {items}
    default:
      return state;
  }
};

export default itemsReducer