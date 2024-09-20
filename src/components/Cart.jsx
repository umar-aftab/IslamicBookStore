import React,{useState} from 'react';

function Cart({cart,removeFromCart}){
    return (
        <>
        <h2>Shopping Cart</h2>
            {
                cart.length === 0 ? (
                    <p> Your cart is empty !</p>
                    ):
                    <ul>
                    (
                        {
                            cart.map((book)=>(
                                <li>
                                <span> {book.title} = {book.author}</span>
                                    <button
                                    onClick={()=>removeFromCart(book)}
                                    >Remove From Cart</button>
                                </li>
                            ))
                        }

                    )
                    </ul>
            }
        </>
    );
}


export default Cart;