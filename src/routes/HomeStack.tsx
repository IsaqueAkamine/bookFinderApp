import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BookDetail, Home} from '../screens';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
