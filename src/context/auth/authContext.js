import {createContext, useState} from 'react';

const authContext = createContext();
export default authContext;

export const AuthProvider =({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    

    const login =() => {
        setUserToken('elmahunuel');
        setIsLoading(false);
    }
    const logout =() => {
        setUserToken('elmahunuel');
        setIsLoading(false);
    }


    return (
        <authContext.Provider value ={{login, logout, isLoading, userToken}}>
            {children}
        </authContext.Provider>
    )
}