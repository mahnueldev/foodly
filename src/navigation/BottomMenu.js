import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import FileScreen from '../screens/Tabs/FileScreen';


const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Search" component={FileScreen} />
    </Tabs.Navigator>
  );

  export default Tabs;