import {
    SET_SCANNED,
    SET_HASPERMISSION,
    
} from '../types';

export default (state, action) => {
    switch(action.type){
        case SET_SCANNED:
            return  action.payload;
        case SET_HASPERMISSION:
                return  null;
            default:
                return state;
            }
        };