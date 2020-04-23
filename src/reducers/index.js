import { combineReducers } from 'redux';
import productsListReducer from './productsList/productsList';
import productSelectedReducer from './productSelected/productSelected';
import productsToBuyReducer from './productsToBuy/productsToBuy';

export default combineReducers({
    productsList : productsListReducer,
    productsListSelected : productSelectedReducer,
    productsListToBuy : productsToBuyReducer
})