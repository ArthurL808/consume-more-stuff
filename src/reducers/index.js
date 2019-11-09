import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import singleItemReducer from "./singleItemReducer";

const reducer = combineReducers({
  items: itemsReducer,
  item: singleItemReducer
});

export default reducer;
