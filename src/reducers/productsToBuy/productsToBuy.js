import { LOAD_DATA, ADD_PRODUCT, REMOVE_PRODUCT,  CLEAN_PRODUCTS} from 'actions/types';


export default function(state = [], action){
    switch (action.type){
        case LOAD_DATA:
            return [...action.payload]
        case ADD_PRODUCT:
            return [...state.filter((product)  => product.id !== action.payload.id), action.payload]
        case REMOVE_PRODUCT:
            return [...state.filter((product)  => product.id !== action.payload)]
        case CLEAN_PRODUCTS:
            return []
        default:
            return state;
    }
}