import AsyncStorage from '@react-native-async-storage/async-storage';

export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      dispatch({
        type: 'LOGIN',
        payload: token,
      });
    }
  };
};

export const Login = (username, password) => {
  return async dispatch => {
    let token = null;
    if (username === 'Isaqueakamine@gmail.com' && password === '123456') {
      token = username + password;
      await AsyncStorage.setItem('token', token);
    }

    dispatch({
      type: 'LOGIN',
      payload: token,
    });
  };
};

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
  };
};
