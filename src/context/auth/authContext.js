import { createContext, useState } from "react";
import { auth } from "../../../firebase";

const authContext = createContext();
export default authContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("Logged in with: ", user.email);
    } catch (e) {
      alert(e.message);
    }
  };

  const register = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      console.log("Registered in with:", user.email);
    } catch (e) {
        
      alert(e.message);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <authContext.Provider value={{ login, register, user, setUser, logout }}>
      {children}
    </authContext.Provider>
  );
};
