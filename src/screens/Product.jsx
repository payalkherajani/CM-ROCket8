import React from 'react'
import { ProductCard } from '../components'
import { useCustomContext } from '../context/Context'

const Products = () => {

    const { state } = useCustomContext()
    const { products } = state

    return (
        <>
            <h1>PRODUCTS</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px' }}>


                {
                    products.map((singleProduct) => {
                        return (
                            <ProductCard key={singleProduct.id} singleProduct={singleProduct} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products