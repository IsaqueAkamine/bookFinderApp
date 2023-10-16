import * as React from 'react';
// import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Home, Login, SignUp} from '../screens';
import HomeTab from './HomeTab';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  HomeTab: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type LoginScreenNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeTab">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomeTab" component={HomeTab} />
    </Stack.Navigator>
  );
}

export default AuthStack;
