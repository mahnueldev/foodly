import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { RGBwhite, RGBlightblack, RGBorange} from '../styling/globalStyles'

// Bottom Menu imports
import HomeScreen from '../screens/Tabs/HomeScreen';
import AddScreen from '../screens/Tabs/AddScreen';
import ScanScreen from '../screens/Tabs/ScanScreen';
import HistoryScreen from '../screens/Tabs/HistoryScreen';


const Tab = createBottomTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator 
    initialRouteName= "Home"
 
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        // fontFamily: "LatoBlack"
      },
      // headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {backgroundColor: RGBwhite},
      tabBarInactiveTintColor: RGBlightblack,
      tabBarActiveTintColor: RGBorange,
    }}
    >
      <Tab.Screen name="Scan" component={ScanScreen} 
      options={{ 
        headerShown: false,
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
        headerStyle: {
          backgroundColor: RGBorange,
        },
        headerTintColor: RGBwhite,
        headerTitleStyle: {
          fontWeight: 'bold',
          // fontFamily: 'LatoBold'
        },
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
     
      </Tab.Navigator>
);
}
