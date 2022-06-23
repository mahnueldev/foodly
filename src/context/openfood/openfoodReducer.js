import {
    GET_ITEMS,
    SET_LOADING,
    
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
               products: action.payload,
               loading: false 
            }
            case SET_LOADING:
            return {
              ...state,
              loading: true
            }
        default:
            return state;
        }
    }