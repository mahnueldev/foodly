import { USER_ID, PASSWORD } from '@env';
import React, { useReducer } from 'react';
import axios from 'axios';
import OpenFoodContext from './openfoodContext';
import OpenFoodReducer from './openfoodReducer';
import { SEARCH_ITEM , GET_ITEMS, POST_PRODUCT, GET_HISTORY, SET_LOADING } from '../types';



const OpenFoodState = props => {
    const initialState = {
        item: null,
        items: [],
        product: {},
        history: null,
        loading: false,
    };

    const [state, dispatch] = useReducer(OpenFoodReducer, initialState);

    // Search single item
    const searchItem = async (index) => {
        setLoading(true);

        const res = await axios.get(
            `https://world.openfoodfacts.org/api/v2/search?code=${index}&fields=id,product_name,brands,countries,creator,data_sources,image_thumb_url`
        );
        dispatch({
            type: SEARCH_ITEM,
            payload: res.data.products[0]
        });
        setLoading(false);
    };
    
    // Get Lists
    const getItems = async () => {
        setLoading(true);

        const res = await axios.get(
            `https://world.openfoodfacts.org/ingredients.json`
        );
        dispatch({
            type: GET_ITEMS,
            payload: res.data.tags[15]
        });

        setLoading(false);
    };

    // Post Product
    const postProduct = async () => {
        setLoading(true);

        const res = await axios.post(
            `https://us.openfoodfacts.org/cgi/product_jqm2.pl?code=${index}&user_id=${USER_ID}&password=${PASSWORD}&brands=${brands}&labels=${labels}`
        );
        console.log(res.data.product);
        dispatch({
            type: POST_PRODUCT,
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
                product:state.product,
                history:state.history,
                loading: state.loading,
                getItems,
                searchItem
            }}>
            {props.children}
        </OpenFoodContext.Provider>
    );
};

export default OpenFoodState;


