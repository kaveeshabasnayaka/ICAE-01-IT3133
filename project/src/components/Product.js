import '../assets/CSS/layout.css';
import {useState} from 'react';


export default function Product({detail}){


    let [quantity,setQuantity] = useState(0);


    const addToCart = () =>{
        const totalPrice = `${detail.price}`*quantity;
       console.log(quantity)
    }

    


    
    return(
        <div className="grid-item">

            <div class="card">
                <img 
                className="card img" 
                src={require(`../assets/image/${detail.img}`)} 
                alt="pic" 
                />
                <div class="card-body">
                    <h5 class="card-title">Price:{detail.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e)=>{setQuantity(e.target.value)}}/>
                    </div>
                    <button class="card-button" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}