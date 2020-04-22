import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
  <Root>
     <Header />
  </Root>
 );
})

it('shows a logo image', () => {
  console.log(wrapped.find('img'));
 expect(wrapped.find('img').length).toEqual(1);
})

xit('shows a correct price', () => {
  wrapped = mount(<Header />).simulate('change', {target:{value: 5}});
  wrapped.update();
  wrapped.prop('value');
  describe('something', () =>{});
})

xit('remove all products', () => {
 
})