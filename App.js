import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OpenFoodState from './src/context/openfood/OpenFoodState'

// Stack Screens
import ScanInfoScreen from './src/screens/Stacks/ScanInfoScreen';

// import AuthStack from './src/navigation/AuthStack';
import DrawerStack from './src/navigation/DrawerStack';
// import AuthStack from './src/navigation/AuthStack';
// import TabStack from './src/navigation/TabStack';

const Stack = createNativeStackNavigator();





export default function App() {
    return (
      <OpenFoodState>
      <NavigationContainer>
          <Stack.Navigator>
          {/* <Stack.Screen name="AuthStack" options={{ headerShown: false }}component={AuthStack} /> */}
          <Stack.Screen name="DrawerStack" options={{ headerShown: false }}component={DrawerStack} />
          <Stack.Screen name="ScanInfoScreen" component={ScanInfoScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
      </NavigationContainer>
      </OpenFoodState>
    );   
  }
  