import React from 'react'
import { REMOVE_FROM_SAVE_LATER } from '../constants/types'
import { useCustomContext } from '../context/Context'


const SaveLater = () => {

    const { state, dispatch } = useCustomContext()
    const { save_for_later } = state

    const removeProductFromSaveLater = (productID) => {
        dispatch({ type: REMOVE_FROM_SAVE_LATER, payload: productID })
    }

    return (
        <div>
            <h2>{save_for_later.length === 0 ? ("Your SaveLater is Empty") : ("Your SaveLater")}</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px' }}>

                {
                    save_for_later && save_for_later.map((item) => {
                        return (
                            <div style={{ border: '1px solid black', margin: '1rem', width: '400px', height: '500px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', alignItems: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} key={item.id}>
                                <div>{item.product_name}</div>
                                <img src={item.image_of_product} alt="product-image" style={{ width: '150px', height: '150px' }} />
                                <div>{item.brand}</div>
                                <div>{item.product_description}</div>
                                <div>Price: <span>{item.discounted_price}</span> <span style={{ textDecoration: 'line-through' }}>{item.selling_price}</span> <span style={{ color: 'green' }}>{item.discount_rate}%</span></div>
                                <button onClick={() => removeProductFromSaveLater(item.id)} className="btn btn-danger">Remove From SaveLater</button>
                            </div>
                        )
                    })}
            </div>


        </div>
    )
}

export default SaveLater