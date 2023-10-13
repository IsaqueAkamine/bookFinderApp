import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../routes/AuthStack';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  ButtonContainer,
  Container,
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

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCreateAccount = () => {
    console.log('create account');
  };

  return (
    <Container>
      <Image
        source={require('../../assets/img/books.jpg')}
        resizeMode="stretch"
      />
      <SafeAreaContainer>
        <FormContainer>
          <Title>New Account</Title>
          <Input
            description="username"
            maxLength={40}
            keyboardType="email-address"
          />
          <Input description="password" isPassword maxLength={40} />
          <Input description="repeat password" isPassword maxLength={40} />

          <ButtonContainer>
            <Button
              title="Create Account"
              icon="login"
              onPress={handleCreateAccount}
            />
          </ButtonContainer>

          <NoAccountContainer>
            <SignUpText>Already have account? </SignUpText>
            <SignUpContainer onPress={handleLogin}>
              <SignUpText>Login</SignUpText>
            </SignUpContainer>
          </NoAccountContainer>
        </FormContainer>
      </SafeAreaContainer>
    </Container>
  );
};

export default Login;
