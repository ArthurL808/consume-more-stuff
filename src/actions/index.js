export const LOAD_ITEM = "LOAD_ITEM";
export const LOAD_USER = "LOAD_USER";

export const loadItemAsync = () = async dispatch => {
    await fetch("api/items")
    .then(response => {
        return response.json();
    })
    .then(items => {
        console.log(items)
        dispatch({
            type: LOAD_ITEM,
            payload: items
        })
    })
    .catch(err => {
        console.log(err.message)
    })
}