import {LOAD_ITEM,EDIT_ITEM} from '../actions';

const initialState = {
    name: '',
    description: '',
    category: {
        id: 0, category: ''
    },
    condition: {
        id: 0, condition: ''
    },
    itemStatus: {
        id: 0, status: ''
    },
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
            return Object.assign({},state,action.payload)
            case EDIT_ITEM:
                return {...state, state: action.payload}
            default:
                return state
    }
}

export default singleItemReducer