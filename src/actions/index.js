export const LOAD_ITEMS = "LOAD_ITEMS";
export const LOAD_USERS = "LOAD_USERS";
export const ADD_ITEM = "ADD_ITEM";
export const LOAD_ITEM = "LOAD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";

export const loadItemsAsync = () => async dispatch => {
  fetch("/api/items")
    .then(response => {
      return response.json();
    })
    .then(items => {
      dispatch({
        type: LOAD_ITEMS,
        payload: items
      });
      return items;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const loadItemAsync = id => async dispatch => {
  fetch(`/api/items/${id}`)
    .then(response => {
      return response.json();
    })
    .then(item => {
      dispatch({
        type: LOAD_ITEM,
        payload: item
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const addItemAsync = item => async dispatch => {
  fetch("/api/items/new", {
    method: "POST",
    body: item
  })
    .then(response => {
      return response.json();
    })
    .then(body => {
      dispatch({
        type: ADD_ITEM,
        payload: body
      });
    });
};

export const editItemAsync = (id, item) => async dispatch => {
  fetch(`/api/items/${id}`, {
    method: "PUT",
    body: item
  })
    .then(response => {
      return response.json();
    })
    .then(body => {
      dispatch({
        type: EDIT_ITEM,
        payload: body
      });
    });
};

export const deleteItemAsync = id => async dispatch => {
  fetch(`/api/items/${id}`, {
    method: "DELETE",
    body: id
  })
    .then(response => {
      return response.json();
    })
    .then(body => {
      dispatch({
        type: DELETE_ITEM,
        payload: body
      });
    });
};

export const login = user => async dispatch => {
  fetch(`api/auth/login`, {
    method: "POST",
    body: user
  })
    .then(response => {
      return response.json();
    })
    .then(body => {
      dispatch({
        type: LOGIN,
        payload: body
      });
    });
};

export const register = user => async dispatch => {
  fetch("api/auth/register", {
    method: "POST",
    body: user
  })
    .then(response => {
      return response.json();
    })
    .then(body => {
      dispatch({
        type: REGISTER,
        payload: body
      });
    });
};

export const logut = () => async dispatch => {
  fetch("api/auth/logout", {
    method: "POST"
  })
    .then(response => {
      return response.json();
    })
    .then(body => {
      dispatch({
        type: LOGOUT,
        payload: body
      });
    });
};
