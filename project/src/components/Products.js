
import '../assets/CSS/layout.css';
import Product from './Product';
import Cart from './Cart';
import {flowers as flowersdb} from './FlowerDB';
import { useState } from 'react';

export default function Products(){

    const[cartset,setCartSet]=useState([]);
    const[totalPrice,setTotalPrice]=useState(0);
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowersdb.map((item)=> <Product detail={item} setCartSet={setCartSet} setTotalPrice={setTotalPrice} totalPrice={totalPrice}/> )
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                <Cart cartset={cartset} totalPrice={totalPrice}/>
                }
            </div>
        </>
    );

}