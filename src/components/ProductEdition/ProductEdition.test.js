import React from 'react';
import { shallow } from 'enzyme';
import ProductEdition from './ProductEdition';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <Root>
      <ProductEdition />
    </Root>
  );
})

xit('product should be added', () => {
 
})

xit('product should be removed', () => {
 
})

xit('product value and quatity should change', () => {
 
})