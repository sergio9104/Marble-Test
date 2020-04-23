import productsList from './productsList';
import { LOAD_PRODUCTS } from 'actions/types';

it('handle action with LOAD_PRODUCTS type', () => {
    const action = {
        type: LOAD_PRODUCTS,
        payload:[ {
            id: 0,
            name: 'chocolate',
            individualPrice: 2000,
            quantity:0,
            totalPrice: 0,
            description: 'yummi chocolate'
        },{
            id: 1,
            name: 'ice cream',
            individualPrice: 2200,
            quantity:0,
            totalPrice: 0,
            description: 'yummi ice cream'
        },{
            id: 2,
            name: 'cake',
            individualPrice: 1000,
            quantity:0,
            totalPrice: 1000,
            description: 'yummi cake'
        }]
    }

    const newState = productsList([], action);

    expect(newState).toEqual([ {
        id: 0,
        name: 'chocolate',
        individualPrice: 2000,
        quantity:0,
        totalPrice: 0,
        description: 'yummi chocolate'
    },{
        id: 1,
        name: 'ice cream',
        individualPrice: 2200,
        quantity:0,
        totalPrice: 0,
        description: 'yummi ice cream'
    },{
        id: 2,
        name: 'cake',
        individualPrice: 1000,
        quantity:0,
        totalPrice: 1000,
        description: 'yummi cake'
    }])
})