export const LOAD_ITEMS = "LOAD_ITEMS";
export const LOAD_USERS = "LOAD_USERS";

export const loadItemsAsync = () => async dispatch => {
  fetch("api/items")
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
