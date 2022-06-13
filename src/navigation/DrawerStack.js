import { createDrawerNavigator } from '@react-navigation/drawer';

import TabStack from './TabStack';
// Drawer imports
import ProfileScreen from '../screens/Drawers/ProfileScreen';
import SettingScreen from '../screens/Drawers/SettingScreen';
import LogoutScreen from '../screens/Drawers/LogoutScreen';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
    return (
        <Drawer.Navigator >
          <Drawer.Screen name="Home" options={{ headerShown: false }}component={TabStack} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
          <Drawer.Screen name="Logout" component={LogoutScreen}/>
          </Drawer.Navigator>
    );
  }
  