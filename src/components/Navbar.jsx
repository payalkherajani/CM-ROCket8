import React from 'react'
import { useNavigate } from 'react-router'


const Navbar = () => {
    const navigate = useNavigate()

    const navigateUserToCartPage = () => {
        navigate('/cart')
    }

    const navigateUserToSaveLaterPage = () => {
        navigate('/savelater')
    }

    const navigateUserToProductsPage = () => {
        navigate('/')
    }
    return (
        <div className="nav nav-dark">
            <button onClick={navigateUserToProductsPage} className="btn btn-info">PRODUCTS </button>
            <button onClick={navigateUserToCartPage} className="btn btn-info">GO-TO CART</button>
            <button onClick={navigateUserToSaveLaterPage} className="btn btn-info">SaveLater</button>
        </div>
    )
}


export default Navbar