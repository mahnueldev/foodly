import React, { useReducer } from 'react';
import axios from 'axios';
import OpenFoodContext from './openfoodContext';
import OpenFoodReducer from './openfoodReducer';
import { GET_ITEMS, SET_LOADING } from '../types';

const OpenFoodState = props => {
    const initialState = {
        items: null,
        loading: false,
    };

    const [state, dispatch] = useReducer(OpenFoodReducer, initialState);

    // Get List
    const getItems = async () => {
        setLoading(true);

        const res = await axios.get(
            `https://world.openfoodfacts.org/api/v0/product/737628064502.json`
        );
        console.log(res.data.product);
        dispatch({
            type: GET_ITEMS,
            payload: res.data.product,
        });

        setLoading(false);
    };

    // Set Loading
    const setLoading = payload => dispatch({ type: SET_LOADING, payload });

    return (
        <OpenFoodContext.Provider
            value={{
                items: state.items,
                loading: state.loading,
                getItems,
            }}>
            {props.children}
        </OpenFoodContext.Provider>
    );
};

export default OpenFoodState;
