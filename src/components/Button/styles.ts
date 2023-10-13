import styled from 'styled-components/native';
import {COLORS} from '../../constants';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  gap: 8px;
  padding: 10px 30px;
  background-color: ${COLORS.primary};
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${COLORS.white};
  font-weight: bold;
  font-size: 18px;
`;
