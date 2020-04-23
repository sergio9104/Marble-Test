import { SELECT_PRODUCT, EDIT_QUANTITY } from 'actions/types';


export default function(state = null, action){
    switch (action.type){
        case SELECT_PRODUCT:
            return {...action.payload}
        case EDIT_QUANTITY:
            return state ? {...state, quantity: action.payload, totalPrice: action.payload*state.individualPrice} : null;
        default:
            return state;
    }
}