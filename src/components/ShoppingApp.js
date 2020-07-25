import React, { useMemo } from 'react';
import Header from "./header/Header";
import Products from "./products/Products";
import Total from "./total/Total.js";
import ProductFilter from "./productFilter/ProductFilter";
import './ShoppingApp.css';

function ShoppingApp() {

  return (
    <div className="shopping-app">
      <Header />
      <div className="shopping-app__body">
        <ProductFilter />
        <Products />
        <Total />
      </div>
    </div>
  );
}

export default ShoppingApp;
