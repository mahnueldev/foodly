import React, { useReducer } from 'react';
import axios from 'axios';
import OpenFoodContext from './openfoodContext';
import OpenFoodReducer from './openfoodReducer';
import { SEARCH_ITEM , GET_ITEMS, POST_ITEMS, SET_LOADING } from '../types';

const OpenFoodState = props => {
    const initialState = {
        item: {},
        items: null,
        loading: false,
    };

    const [state, dispatch] = useReducer(OpenFoodReducer, initialState);

    // Search single item
    const searchItem = async (index) => {
        setLoading(true);

        const res = await axios.get(
            `https://world.openfoodfacts.org/api/v2/search?code=${index}&fields=code,product_name`
        );
        console.log(res.data);
        dispatch({
            type: SEARCH_ITEM,
            payload: res.data,
        });
        setLoading(false);
    };
    
    // Get Lists
    const getItems = async () => {
        setLoading(true);

        const res = await axios.get(
            `https://world.openfoodfacts.org/api/v0/product/3017620422003`
        );
        // console.log(res.data.product);
        dispatch({
            type: GET_ITEMS,
            payload: res.data.product,
        });

        setLoading(false);
    };

    // Post Items
    const postItems = async () => {
        setLoading(true);

        const res = await axios.post(
            `https://us.openfoodfacts.org/cgi/product_jqm2.pl`
        );
        console.log(res.data.product);
        dispatch({
            type: POST_ITEMS,
            payload: res.data.product,
        });

        setLoading(false);
    };

    // Set Loading
    const setLoading = payload => dispatch({
         type: SET_LOADING, 
         payload 
        });

    return (
        <OpenFoodContext.Provider
            value={{
                item: state.item,
                items: state.items,
                loading: state.loading,
                getItems,
                searchItem
            }}>
            {props.children}
        </OpenFoodContext.Provider>
    );
};

export default OpenFoodState;
