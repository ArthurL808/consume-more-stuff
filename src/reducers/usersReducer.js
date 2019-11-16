import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  name: "",
  email: "",
  password: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, action.payload);
    case LOGOUT:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default userReducer