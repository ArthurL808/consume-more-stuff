import {LOAD_ITEM} from '../actions';

const initialState = {
    name: '',
    description: '',
    price: 0,
    manufacturer: '',
    imageUrl: '',
    user_id: 0,
    category_id: 0,
    itemStatus_id: 0,
    condition_id: 0
}

const singleItemReducer = (state = initialState, action) =>{
    switch (action.type){
        case LOAD_ITEM:
            return {...state, initialState:action.payload}
            default:
                return state
    }
}

export default singleItemReducer