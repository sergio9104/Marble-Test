import React from 'react';
import { shallow } from 'enzyme';
import ProductsSelected from './ProductsSelected';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <Root>
      <ProductsSelected />
    </Root>
  );
})

xit('shows products', () => {
 
})

xit('shows total price correctly', () => {
 
})

xit('wompi modal should be open', () => {
 
})
