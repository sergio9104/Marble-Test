import productSelected from './productSelected';
import { SELECT_PRODUCT, EDIT_QUANTITY } from 'actions/types';

it('handle action with SELECT_PRODUCT type', () => {
    const action = {
        type: SELECT_PRODUCT,
        payload: {
            id: 0,
            name: 'chocolate',
            individualPrice: 2000,
            quantity:2,
            totalPrice: 4000,
            description: 'yummi'
        }
    }

    const newState = productSelected([], action);

    expect(newState).toEqual({
        id: 0,
        name: 'chocolate',
        individualPrice: 2000,
        quantity:2,
        totalPrice: 4000,
        description: 'yummi'
    })
})

it('handle action with EDIT_QUANTITY type', () => {
    const actionEdit = {
        type: EDIT_QUANTITY,
        payload: 4
    }

    let stateEdit = productSelected(null, actionEdit);
    expect(stateEdit).toEqual(null)

    stateEdit = productSelected({
            id: 0,
            name: 'chocolate',
            individualPrice: 2000,
            quantity:2,
            totalPrice: 4000,
            description: 'yummi'
        }, actionEdit);

    expect(stateEdit).toEqual({
        id: 0,
        name: 'chocolate',
        individualPrice: 2000,
        quantity:4,
        totalPrice: 8000,
        description: 'yummi'
    })
})