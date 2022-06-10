
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Bottom Menu imports
import HomeScreen from './src/screens/Tabs/HomeScreen';
import AddScreen from './src/screens/Tabs/AddScreen';
import ScanScreen from './src/screens/Tabs/ScanScreen';
import HistoryScreen from './src/screens/Tabs/HistoryScreen';
import ListScreen from './src/screens/Tabs/ListScreen';

import StackScreen from './src/screens/Stacks/StackScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Scan" component={ScanScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Add" component={AddScreen} />
          <Tab.Screen name="List" component={ListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );

    // return (
    //   <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Stack" component={StackScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // );

    
    // return( 
    //   <NavigationContainer>
    //   <Stack.Navigator>
    //     <Tab.Screen name="Scan" component={ScanScreen} />
    //     <Stack.Screen name="Stack" component={StackScreen} />
    //       <Tab.Screen name="History" component={HistoryScreen} />
    //       <Tab.Screen name="Home" component={HomeScreen}/>
    //       <Tab.Screen name="Add" component={AddScreen} />
    //       <Tab.Screen name="List" component={ListScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //  )
}

