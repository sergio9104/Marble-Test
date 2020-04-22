import React from 'react';
import './App.css';
import Header from './Header/Header';
import ProductEdition from './ProductEdition/ProductEdition';
import Products from './Products/Products';
import ProductsSelected from './ProductsSelected/ProductsSelected';
import WompiModal from './WompiModal/WompiModal';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Products></Products>
        <ProductEdition></ProductEdition>
        <ProductsSelected></ProductsSelected>
        <WompiModal></WompiModal>
      </main>
    </div>
  );
}

export default App;
