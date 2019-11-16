import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import singleItemReducer from "./singleItemReducer";
import userReducer from './usersReducer'

const reducer = combineReducers({
  items: itemsReducer,
  item: singleItemReducer,
  user: userReducer
});

export default reducer;
