import React from 'react';
import Input from '../../components/Input';

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
import Button from '../../components/Button';

const Login: React.FC = () => {
  const handleForgot = () => {
    console.log('forgot');
  };

  const handleSignUp = () => {
    console.log('signup');
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
          />
          <Input description="password" isPassword maxLength={40} />

          <ForgotContainer onPress={handleForgot}>
            <ForgotText>Forgot password?</ForgotText>
          </ForgotContainer>

          <ButtonContainer>
            <Button title="Sign In" />
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
