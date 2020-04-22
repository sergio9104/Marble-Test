import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <Root>
      <Products />
    </Root>
  );
})

xit('shows products', () => {
 
})

xit('shows quantity', () => {
 
})

xit('product should be selected', () => {
 
})

xit('product should be unselected', () => {
 
})