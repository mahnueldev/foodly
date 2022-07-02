import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


// Bottom Menu imports
import HomeScreen from '../screens/Tabs/HomeScreen';
import AddScreen from '../screens/Tabs/AddScreen';
import ScanScreen from '../screens/Tabs/ScanScreen';
import HistoryScreen from '../screens/Tabs/HistoryScreen';
import ListScreen from '../screens/Tabs/ListScreen';


const Tab = createBottomTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator 
    initialRouteName= "List"
 
    screenOptions={{
      // headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {backgroundColor: '#fff'},
      tabBarInactiveTintColor: '#8d8d8d',
      tabBarActiveTintColor: '#cc6516',
    }}
    >
      <Tab.Screen name="Scan" component={ScanScreen} 
      options={{ 
        tabBarIcon: ({color, size}) => (
        <MaterialIcons
        name="qr-code"
        size={size}
        color={color}
      /> 
      ),
        }}
      />
      <Tab.Screen name="History" component={HistoryScreen} 
      options={{ 
        tabBarIcon: ({color, size}) => (
        <MaterialIcons
        name="history"
        size={size}
        color={color}
      /> 
      ),
        }}
      />
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{ 
      tabBarIcon: ({color, size}) => (
      <MaterialIcons
      name="dashboard"
      size={size}
      color={color}
    /> 
    ),
      }}
      />
      <Tab.Screen name="Add" component={AddScreen} 
      options={{ 
        tabBarIcon: ({color, size}) => (
        <MaterialIcons
        name="add-circle-outline"
        size={size}
        color={color}
      /> 
      ),
        }}
      />
      <Tab.Screen name="List" component={ListScreen} 
      options={{ 
        tabBarIcon: ({color, size}) => (
        <MaterialIcons
        name="list"
        size={size}
        color={color}
      /> 
      ),
        }}
      />
      </Tab.Navigator>
);
}
