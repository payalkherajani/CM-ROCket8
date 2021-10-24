import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_TO_SAVE_LATER, REMOVE_FROM_SAVE_LATER } from '../constants/types'

export const reducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {

        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, payload] }

        case REMOVE_FROM_CART:
            const filterProductFromCart = state.cart.filter((item) => item.id != payload)
            return { ...state, cart: filterProductFromCart }

        case ADD_TO_SAVE_LATER:
            return { ...state, save_for_later: [...state.save_for_later, payload] }

        case REMOVE_FROM_SAVE_LATER:
            const filterProductFromSaveLater = state.save_for_later.filter((item) => item.id != payload)
            return { ...state, save_for_later: filterProductFromSaveLater }

        case INCREASE_QUANTITY:
            const increaseQtyOfProductInCart = state.cart.map((item) => {
                if (item.id == payload.productId) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            return { ...state, cart: increaseQtyOfProductInCart }

        case DECREASE_QUANTITY:
            const decreaseQtyOfProductInCart = state.cart.map((item) => {
                if (item.id == payload.productId) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            return { ...state, cart: decreaseQtyOfProductInCart }

        default:
            return state

    }
}