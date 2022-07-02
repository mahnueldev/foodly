import { SEARCH_ITEM , GET_ITEMS, POST_ITEMS, SET_LOADING } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_ITEM :
            return {
                ...state,
                item: action.payload,
                loading: false,
            };
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case POST_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};
