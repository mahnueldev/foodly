import {createContext, useState} from 'react';

const authContext = createContext();
export default authContext;

export const AuthProvider =({children}) => {
    const [isLoading, setIsLoading] = useState(true);
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
        <authContext.Provider value ={{login, logout}}>
            {children}
        </authContext.Provider>
    )
}