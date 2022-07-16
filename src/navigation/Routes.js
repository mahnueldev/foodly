import { useContext, useState, useEffect } from "react";
import authContext from "../context/auth/authContext";
import Spinner from "../components/Spinner";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../../firebase";
const Routes = () => {
  const AuthContext = useContext(authContext);
  const { user, setUser } = AuthContext;
  const [initializing, setInitializing] = useState(true);

const onAuthStateChanged =(user) => {
  setUser(user);
  if (initializing) setInitializing(false);
}

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

 if (initializing) return null

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
