import { SELECT_PRODUCT, EDIT_QUANTITY } from 'actions/types';


export default function(state = {}, action){
    switch (action.type){
        case SELECT_PRODUCT:
            return {...action.payload}
        case EDIT_QUANTITY:
            return {...state, quantity: action.payload, totalPrice: action.payload*this.price}
        default:
            return state;
    }
}