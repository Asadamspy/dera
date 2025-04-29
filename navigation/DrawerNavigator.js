// navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/LogoutScreen';
import { useTheme } from '../context/ThemeContext';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { isDarkMode } = useTheme();

  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: theme === 'dark' ? '#2c3e50' : '#f8f8f8',
          width: 240,
        },
        headerStyle: {
          backgroundColor: theme === 'dark' ? '#34495e' : '#007bff',
        },
        headerTintColor: theme === 'dark' ? '#ecf0f1' : '#fff',
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
