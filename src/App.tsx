import React from 'react';
import {Product} from './components/Product';
import { products } from './data/products';

function App() {
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {/* цикл для выводы всех продуктов     */}
      {products.map(product => <Product product={product} key={product.id}/>)}  
    </div>
  );

}

export default App;
