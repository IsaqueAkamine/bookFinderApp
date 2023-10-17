import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {Logout} from '../store/actions';

const ExampleScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Example screen</Text>
      <Button title="LOGOUT" onPress={handleLogout} />
    </View>
  );
};

export default ExampleScreen;
