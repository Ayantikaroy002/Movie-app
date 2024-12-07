import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation.js';
import Search from '../pages/Search.jsx';
import MyMovies from '../pages/MyMovies.jsx';
import Profile from '../pages/Profile.jsx';
import { Ionicons } from '@expo/vector-icons'; // Ensure @expo/vector-icons is installed

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
   <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Search') {
        iconName = focused ? 'search' : 'search-outline';
      } else if (route.name === 'My-movies') {
        iconName = focused ? 'library' : 'library-outline';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { backgroundColor: 'black' }, 
    headerShown: false, 
  })}
>
  <Tab.Screen name="Home" component={HomeNavigation} />
  <Tab.Screen name="Search" component={Search} />
  <Tab.Screen name="My-movies" component={MyMovies} />
  <Tab.Screen name="Profile" component={Profile} />
</Tab.Navigator>

  );
}
