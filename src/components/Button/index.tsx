import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({title, icon = null}) => {
  return (
    <Container activeOpacity={0.8}>
      <Title>{title}</Title>
      {icon && <Title>{'=>'}</Title>}
    </Container>
  );
};

export default Button;
