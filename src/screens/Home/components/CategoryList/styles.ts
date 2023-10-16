import styled from 'styled-components/native';
import {COLORS} from '../../../../constants';

export const CategoryContainer = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${COLORS.secondary};
  padding-bottom: 3px;
  align-items: flex-start;
  align-self: flex-start;
`;

export const CategoryTitle = styled.Text`
  color: ${COLORS.secondary};
  font-weight: 600;
`;
