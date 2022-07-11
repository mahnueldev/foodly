import { useContext } from "react";
import authContext from "../context/auth/authContext";
import Spinner from "../components/Spinner";
import AuthStack from "../navigation/AuthStack";
import AppStack from "../navigation/AppStack";
const AppWrapper = () => {
    const AuthContext = useContext(authContext);
    const { isLoading, userToken } = AuthContext;
   if (isLoading) return <Spinner />

  return userToken !== null ?  <AppStack /> : <AuthStack />
  
}

export default AppWrapper