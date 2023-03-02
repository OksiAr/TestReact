import React, { useState } from 'react'
import {IProduct} from '../models';
import { products } from '../data/products';

interface ProductProps {
    product: IProduct
}
  

export function Product({product}: ProductProps){
    const [details, setdetails] = useState(false)
    const bgButtonClass = details? 'bg-yellow-400' : 'bg-blue-400'
    const btnclasses = ['py-2 px-4 border' , bgButtonClass]
    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
         <img src={product.image} className = "w-1/6" alt={product.title}></img>
        <p>{product.title}</p>
        <p className='font-bold'>{product.price}</p>
        <button className={ btnclasses.join(' ')} onClick={() => setdetails(prev => !prev)}>{details ? 'Hiden description' : "Show description"}</button>
      
        { details && <div>
            <p>{product.description}</p>
            <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
        </div>}
        {/* <p>{product.description}</p> */}
        </div>
    );
}