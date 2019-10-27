export const LOAD_ITEMS = "LOAD_ITEMS";
export const LOAD_USERS = "LOAD_USERS";

export const loadItemsAsync = () => async dispatch => {
    await fetch("api/items/test")
    .then(response => {
        return response.json();
    })
    .then(items => {
        console.log(items)
        dispatch({
            type: LOAD_ITEMS,
            payload: items
        })
    })
    .catch(err => {
        console.log(err.message)
    })
}