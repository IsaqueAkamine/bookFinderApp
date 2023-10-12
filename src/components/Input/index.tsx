import React from 'react';
import {TextInputProps} from 'react-native';

import {COLORS} from '../../constants';
import {Container, Description, InputStyled} from './styles';

interface InputProps extends TextInputProps {
  description: string;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  description,
  isPassword = false,
  ...rest
}) => {
  return (
    <Container>
      <Description>{description}</Description>
      <InputStyled
        {...rest}
        placeholder={description}
        placeholderTextColor={`${COLORS.primary}80`}
        secureTextEntry={isPassword}
      />
    </Container>
  );
};

export default Input;
