import productsToBuy from './productsToBuy';
import { LOAD_DATA, ADD_PRODUCT, REMOVE_PRODUCT,  CLEAN_PRODUCTS} from 'actions/types';

let products = [ {
    id: 0,
    name: 'chocolate',
    individualPrice: 2000,
    quantity:1,
    totalPrice: 2000,
    description: 'yummi chocolate'
},{
    id: 1,
    name: 'ice cream',
    individualPrice: 2200,
    quantity:1,
    totalPrice: 2200,
    description: 'yummi ice cream'
},{
    id: 2,
    name: 'cake',
    individualPrice: 1000,
    quantity:1,
    totalPrice: 1000,
    description: 'yummi cake'
}]

it('handle action with LOAD_DATA type', () => {
    const action = {
        type: LOAD_DATA,
        payload:products
    }

    const newState = productsToBuy([], action);

    expect(newState).toEqual(products)
})

it('handle action with ADD_PRODUCT type', () => {
    const action = {
        type: ADD_PRODUCT,
        payload: {
            id: 3,
            name: 'browni',
            individualPrice: 3000,
            quantity:3,
            totalPrice: 12000,
            description: 'browni'
        }
    }

    const newState = productsToBuy(products, action);

    expect(newState).toEqual([...products, {
        id: 3,
        name: 'browni',
        individualPrice: 3000,
        quantity:3,
        totalPrice: 12000,
        description: 'browni'
    }])
})

it('handle action with REMOVE_PRODUCT type', () => {
    const action = {
        type: REMOVE_PRODUCT,
        payload: 0
    }

    const newState = productsToBuy(products, action);

    expect(newState).toEqual([{
        id: 1,
        name: 'ice cream',
        individualPrice: 2200,
        quantity:1,
        totalPrice: 2200,
        description: 'yummi ice cream'
    },{
        id: 2,
        name: 'cake',
        individualPrice: 1000,
        quantity:1,
        totalPrice: 1000,
        description: 'yummi cake'
    }])
})

it('handle action with CLEAN_PRODUCTS type', () => {
    const action = {
        type: CLEAN_PRODUCTS
    }

    const newState = productsToBuy(products, action);

    expect(newState).toEqual([])
})