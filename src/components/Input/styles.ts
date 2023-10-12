import styled from 'styled-components/native';
import {COLORS} from '../../constants';

export const Container = styled.View`
  gap: 8px;
`;

export const Description = styled.Text`
  color: ${COLORS.primary};
`;

export const InputStyled = styled.TextInput`
  border-radius: 12px;
  border-width: 0.5px;
  border-color: ${COLORS.primary}80;
  padding: 14px;
`;
