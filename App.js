import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OpenFoodState from './src/context/openfood/OpenFoodState'
import {AuthProvider} from './src/context/auth/authContext'

// Stack Screens
import ScanInfoScreen from './src/screens/Stacks/ScanInfoScreen';

import DrawerStack from './src/navigation/DrawerStack';
import AuthStack from './src/navigation/AuthStack';
// import TabStack from './src/navigation/TabStack';

const Stack = createNativeStackNavigator();





export default function App() {

  let [fontsLoaded] = useFonts({
    LatoBlack:require('./src/assets/fonts/Lato-Black.ttf'),
    LatoBold:require('./src/assets/fonts/Lato-Bold.ttf'),
    LatoItalic:require('./src/assets/fonts/Lato-Italic.ttf'),
    LatoRegular:require('./src/assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }



    return (
      <AuthProvider>
      <OpenFoodState>
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="AuthStack" options={{ headerShown: false }}component={AuthStack} />
          <Stack.Screen name="DrawerStack" options={{ headerShown: false }}component={DrawerStack} />
          <Stack.Screen name="ScanInfoScreen" component={ScanInfoScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
      </NavigationContainer>
      </OpenFoodState>
      </AuthProvider>
    );   
  }
  