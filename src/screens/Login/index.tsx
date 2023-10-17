import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Login as LoginAction} from '../../store/actions';

import {LoginScreenNavigationProp} from '../../routes/AuthStack';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  ButtonContainer,
  Container,
  ForgotContainer,
  ForgotText,
  FormContainer,
  Image,
  NoAccountContainer,
  SafeAreaContainer,
  SignUpContainer,
  SignUpText,
  Title,
} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleForgot = () => {
    console.log('forgot');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    dispatch(LoginAction(username, password));
  };

  return (
    <Container>
      <Image
        source={require('../../assets/img/books.jpg')}
        resizeMode="stretch"
      />
      <SafeAreaContainer>
        <FormContainer>
          <Title>HELLO BOOK</Title>
          <Input
            description="username"
            maxLength={40}
            keyboardType="email-address"
            value={username}
            onChangeText={setUsername}
          />
          <Input
            description="password"
            isPassword
            maxLength={40}
            value={password}
            onChangeText={setPassword}
          />

          <ForgotContainer onPress={handleForgot}>
            <ForgotText>Forgot password?</ForgotText>
          </ForgotContainer>

          <ButtonContainer>
            <Button title="Sign In" icon="login" onPress={handleLogin} />
          </ButtonContainer>

          <NoAccountContainer>
            <SignUpText>No Account yet? </SignUpText>
            <SignUpContainer onPress={handleSignUp}>
              <SignUpText>Sign Up</SignUpText>
            </SignUpContainer>
          </NoAccountContainer>
        </FormContainer>
      </SafeAreaContainer>
    </Container>
  );
};

export default Login;
