import React from 'react';
import {useNavigation} from '@react-navigation/native';
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

  const handleForgot = () => {
    console.log('forgot');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
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
            <Button title="Sign In" icon="login" />
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
