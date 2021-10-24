import { createContext, useReducer } from 'react';
import { reducer } from '../reducers/Reducer';
import productsData from '../products.json'
import { useContext } from 'react';

export const Context = createContext({});

const { products } = productsData

const initialState = {
    products: products,
    cart: [],
    save_for_later: []
}

export const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export const useCustomContext = () => {
    return useContext(Context);
}