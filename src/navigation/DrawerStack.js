import { createDrawerNavigator } from '@react-navigation/drawer';

import TabStack from './TabStack';
// Drawer imports
import ProfileScreen from '../screens/Drawers/ProfileScreen';
import AllergenScreen from '../screens/Drawers/AllergenScreen';
import AdditiveScreen from '../screens/Drawers/AdditiveScreen';
import LogoutScreen from '../screens/Drawers/LogoutScreen';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
    return (
        <Drawer.Navigator >
          <Drawer.Screen name="Dashboard" options={{ headerShown: false }}component={TabStack} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Allergens" component={AllergenScreen} />
          <Drawer.Screen name="Additives" component={AdditiveScreen} />
          <Drawer.Screen name="Logout" component={LogoutScreen}/>
          </Drawer.Navigator>
    );
  }
  