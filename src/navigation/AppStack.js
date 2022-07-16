import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// Stack Screens
import ScanInfoScreen from "../screens/Stacks/ScanInfoScreen";
import DrawerStack from "../navigation/DrawerStack";
import OpenFoodState from "../context/openfood/OpenFoodState";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <OpenFoodState>
      
        <Stack.Navigator>
          <Stack.Screen
            name="DrawerStack"
            options={{ headerShown: false }}
            component={DrawerStack}
          />
          <Stack.Screen
            name="ScanInfoScreen"
            component={ScanInfoScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      
    </OpenFoodState>
  );
};

export default AppStack;
