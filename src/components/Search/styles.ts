import styled from 'styled-components/native';
import {COLORS} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: #faf8f3;
  padding: 12px;
  border-radius: 12px;
  flex-direction: row;
  gap: 8px;
`;

export const Input = styled.TextInput``;

export const Icon = styled(Feather)`
  color: ${COLORS.primary}80;
`;
