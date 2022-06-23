import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OpenFoodState from './src/context/openfood/OpenFoodState'

// Stack Screens
import StackScreen from './src/screens/Stacks/StackScreen';
import DoubleStack from './src/screens/Stacks/DoubleStack';

// import AuthStack from './src/navigation/AuthStack';
import DrawerStack from './src/navigation/DrawerStack';
// import TabStack from './src/navigation/TabStack';

const Stack = createNativeStackNavigator();





export default function App() {
    return (
      <OpenFoodState>
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="DrawerStack" options={{ headerShown: false }}component={DrawerStack} />
          <Stack.Screen name="StackScreen" component={StackScreen} />
          <Stack.Screen name="DoubleStack" component={DoubleStack} />

      </Stack.Navigator>
      </NavigationContainer>
      </OpenFoodState>
    );   
  }
  