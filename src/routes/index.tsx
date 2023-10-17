import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {useDispatch, useSelector} from 'react-redux';
import HomeTab from './HomeTab';
import {Init} from '../store/actions';
import {ActivityIndicator, View} from 'react-native';
import {COLORS} from '../constants';

export default function Routes() {
  const token = useSelector(state => state.AuthReducers.authToken);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <HomeTab />}
    </NavigationContainer>
  );
}
