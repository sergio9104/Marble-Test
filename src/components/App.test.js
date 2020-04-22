import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Header from './Header/Header';
import Products from './Products/Products';
import ProductsSelected from './ProductsSelected/ProductsSelected';
import ProductEdition from './ProductEdition/ProductEdition';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})

it('shows a header component', () => {
  expect(wrapped.find(Header).length).toEqual(1);
})

it('shows a products component', () => {
  expect(wrapped.find(Products).length).toEqual(1);
})

xit('shows a product selected component', () => {
  expect(wrapped.find(ProductsSelected).length).toEqual(1);
})

xit('shows a product edition component', () => {
  expect(wrapped.find(ProductEdition).length).toEqual(1);
})