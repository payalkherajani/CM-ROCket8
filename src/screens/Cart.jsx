import React, { useState } from 'react'
import { ADD_TO_SAVE_LATER, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from '../constants/types'
import { useCustomContext } from '../context/Context'


const Cart = () => {

    const { state, dispatch } = useCustomContext()

    const { cart, save_for_later } = state

    const removeItemFromCart = (productID) => {
        dispatch({ type: REMOVE_FROM_CART, payload: productID })
    }

    const saveProductForLater = (product) => {
        dispatch({ type: ADD_TO_SAVE_LATER, payload: product })
    }

    const checkForProductInSaveLater = (id) => {
        return save_for_later.some((i) => i.id === id)
    }

    const increaseQuantityOfProduct = (productId) => {
        dispatch({ type: INCREASE_QUANTITY, payload: { productId } })
    }

    const decreaseQuantityOfProduct = (productId) => {
        dispatch({ type: DECREASE_QUANTITY, payload: { productId } })
    }


    return (
        <div>
            <h2>Total Price: {cart.reduce((acc, cv) => acc + cv.discounted_price * cv.quantity, 0)} </h2>
            <h3>Total Items: {cart.length} </h3>
            {cart.length === 0 ? ("Your Cart is Empty") : ("Your Cart")}
            <div>
                {
                    cart && cart.map((item) => {
                        return (
                            <div style={{ border: '1px solid black', margin: '1rem', width: '400px', height: '500px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', alignItems: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} key={item.id}>
                                <div>{item.product_name}</div>
                                <img src={item.image_of_product} alt="product-image" style={{ width: '150px', height: '150px' }} />
                                <div>{item.brand}</div>
                                <div>{item.product_description}</div>
                                <div>Price: <span>{item.discounted_price}</span> <span style={{ textDecoration: 'line-through' }}>{item.selling_price}</span> <span style={{ color: 'green' }}>{item.discount_rate}%</span></div>
                                <div>
                                    <span>
                                        {item.quantity <= 1 ? (<button disabled={true} className="btn btn-primary">-</button>) :
                                            (<button
                                                onClick={() => decreaseQuantityOfProduct(item.id)}
                                                className="btn btn-primary"
                                            >-</button>)}

                                    </span>

                                    Quantity: {item.quantity}

                                    <span>
                                        <button onClick={() => increaseQuantityOfProduct(item.id)} className="btn btn-primary">+</button>
                                    </span>
                                </div>
                                <button onClick={() => removeItemFromCart(item.id)} className="btn btn-danger">Remove From Cart</button>
                                {checkForProductInSaveLater(item.id) === true ? (<button disabled={true} className="btn btn-success">Added To Save LATER</button>) : (<button onClick={() => saveProductForLater(item)} className="btn btn-info">Save For Later</button>)}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Cart