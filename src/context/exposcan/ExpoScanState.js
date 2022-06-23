import  React, {useReducer} from 'react';
import axios from 'axios';
import ExpoScanContext from './exposcanContext';
import ExpoScanReducer from './exposcanReducer';
import {
    SET_SCANNED,
    SET_HASPERMISSION,
    
} from './types';

const ExpoScanState = props => {
    const initialState = {
        hasPermission: null,
        scanned: false
    };

    const [state, dispatch] = useReducer(ExpoScanReducer, initialState);







    return <ExpoScanContext.Provider
    value={{
        hasPermission: state,
        scanned: state
       
    }}
    >
        {props.children}
    </ExpoScanContext.Provider>
}

export default ExpoScanState;