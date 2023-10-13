import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Container, Title} from './styles';
import {COLORS} from '../../constants';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({title, icon = null}) => {
  return (
    <Container activeOpacity={0.8}>
      <Title>{title}</Title>
      {icon && <MaterialIcons name={icon} color={COLORS.white} size={24} />}
    </Container>
  );
};

export default Button;
