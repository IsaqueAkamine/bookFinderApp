import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';

import {ExampleScreen} from '../screens';
import {COLORS} from '../constants';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const handleTabBarIcon = (route, color, size) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Downloads':
      iconName = 'download';
      break;
    case 'Favorites':
      iconName = 'heart';
      break;
    case 'Account':
      iconName = 'user';
      break;

    default:
      iconName = 'home';
  }

  return <Feather name={iconName} size={size} color={color} />;
};

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => handleTabBarIcon(route, color, size),
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
        }}
      />
      <Tab.Screen name="Downloads" component={ExampleScreen} />
      <Tab.Screen name="Favorites" component={ExampleScreen} />
      <Tab.Screen name="Account" component={ExampleScreen} />
    </Tab.Navigator>
  );
}

export default HomeTab;
