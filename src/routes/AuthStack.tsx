import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Login, SignUp} from '../screens';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  // HomeTab: undefined;
  // // Profile: { userId: string };
  // // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type LoginScreenNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthStack;
