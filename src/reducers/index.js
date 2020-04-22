import { combineReducers } from 'redux';
import productsListReducer from './productsList';
import productSelectedReducer from './productSelected';
import productsToBuyReducer from './productsToBuy';

export default combineReducers({
    productsList : productsListReducer,
    productsListSelected : productSelectedReducer,
    productsListToBuy : productsToBuyReducer
})