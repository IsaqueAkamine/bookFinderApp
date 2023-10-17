import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
import HomeTab from './HomeTab';

export default function Routes() {
  const token = useSelector(state => state.AuthReducers.authToken);
  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <HomeTab />}
    </NavigationContainer>
  );
}
