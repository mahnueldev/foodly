
import { AuthProvider } from "./src/context/auth/authContext";
import AppWrapper from "./src/navigation/AppWrapper";

function App() {
    
  return (
    <AuthProvider>
       <AppWrapper />
    </AuthProvider>
  );
}

export default App;

// <Stack.Screen name="AuthStack" options={{ headerShown: false }}component={AuthStack} />
// {userToken !== null ?  <AppStack /> : <AuthStack />}
