import React from 'react'
import { ADD_TO_CART } from '../constants/types'
import { useCustomContext } from '../context/Context'

const ProductCard = ({ singleProduct }) => {

    const { state, dispatch } = useCustomContext()

    const { cart } = state

    const addProductToCart = (productToAdd) => {
        dispatch({ type: ADD_TO_CART, payload: productToAdd })
    }

    const check = (id) => {
        return cart.some((item) => item.id === id)
    }

    return (
        <div style={{ border: '1px solid black', margin: '1rem', width: '400px', height: '500px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', alignItems: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
            <div>{singleProduct.product_name}</div>
            <img src={singleProduct.image_of_product} alt="product-image" style={{ width: '150px', height: '150px' }} />
            <div>{singleProduct.brand}</div>
            <div>{singleProduct.product_description}</div>
            <div>Price: <span>{singleProduct.discounted_price}</span> <span style={{ textDecoration: 'line-through' }}>{singleProduct.selling_price}</span> <span style={{ color: 'green' }}>{singleProduct.discount_rate}%</span></div>
            {check(singleProduct.id) === true ? (<button disabled={true} className="btn btn-success">Added To Cart</button>) : (<button onClick={() => addProductToCart(singleProduct)} className="btn btn-info">Add To Cart</button>)}
        </div>
    )
}

export default ProductCard