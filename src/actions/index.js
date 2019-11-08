export const LOAD_ITEMS = "LOAD_ITEMS";
export const LOAD_USERS = "LOAD_USERS";
export const ADD_ITEM = 'ADD_ITEM';

export const loadItemsAsync = () => async dispatch => {

  fetch("/items")
    .then(response => {
      return response.json();
    })
    .then(items => {
      dispatch({
        type: LOAD_ITEMS,
        payload: items
      });
      // console.log(items)
      return items;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const addItemAsync = item => async dispatch => {
  fetch('api/items/new', {
    method: "POST",
    body: item,
    header: {
      'Content-Type': 'application/json'
    },
  }).then(response => {
    return response.json();
  }).then(body => {
    dispatch({
      type: ADD_ITEM,
      payload: body,
    })
  })
}