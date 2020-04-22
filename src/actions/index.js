import {
    SELECT_PRODUCT,
    EDIT_QUANTITY,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    CLEAN_PRODUCTS,
    LOAD_DATA,
    LOAD_PRODUCTS
} from 'actions/types';

export function selectProduct(product){
    return {
        type: SELECT_PRODUCT,
        payload: product
    };
}

export function editQuantity(quantity){
    return {
        type: EDIT_QUANTITY,
        payload: quantity
    };
}

export function addProduct(product){
    return {
        type: ADD_PRODUCT,
        payload: product
    };
}

export function removeProduct(product){
    return {
        type: REMOVE_PRODUCT,
        payload: product
    };
}

export function cleanProducts(){
    return {
        type: CLEAN_PRODUCTS
    };
}

export function loadData(data){
    return {
        type: LOAD_DATA,
        payload: data
    };
}

export function loadProducts(data){
    return {
        type: LOAD_PRODUCTS,
        payload: data
    };
}