import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// Bottom Menu imports
import HomeScreen from '../screens/Tabs/HomeScreen';
import AddScreen from '../screens/Tabs/AddScreen';
import ScanScreen from '../screens/Tabs/ScanScreen';
import HistoryScreen from '../screens/Tabs/HistoryScreen';
import ListScreen from '../screens/Tabs/ListScreen';

const Tab = createBottomTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator initialRouteName= "Home">
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      </Tab.Navigator>
);
}
