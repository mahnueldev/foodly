import  React, {useReducer} from 'react';
import axios from 'axios';
import OpenFoodContext from './openfoodContext';
import OpenFoodReducer from './openfoodReducer';
import {
    GET_ITEMS,
    SET_LOADING,
    
} from '../types';



const OpenFoodState = props => {
    const initialState ={
        items: [],
        loading: false
    }

    const [state, dispatch] = useReducer(OpenFoodReducer, initialState);


// Get List
const getItems = async () => {
    setLoading();

    const res = await axios.get(
      `https://world.openfoodfacts.org/api/v0/product/737628064502.json`
    );
    dispatch({
        type: GET_ITEMS,
        payload: res.data.results
    });
  };

  // Set Loading
  const setLoading = () => dispatch ({type: SET_LOADING});


return <OpenFoodContext.Provider
value={{

    items: state.items,
    loading: state.loading,
    getItems
}}
>
    {props.children}
</OpenFoodContext.Provider>
}

export default OpenFoodState;