import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';
import {COLORS} from '../../../../constants';

type CategoryProps = TouchableOpacityProps & {
  selected: boolean;
};

export const CategoryContainer = styled.TouchableOpacity<CategoryProps>`
  border-bottom-width: ${props => (props.selected ? '2px' : '0')};
  border-bottom-color: ${COLORS.secondary};
  padding-bottom: 3px;
  align-items: flex-start;
  align-self: flex-start;
`;

export const PressableButton = styled(CategoryContainer)<CategoryProps>``;

export const CategoryTitle = styled.Text<{selected: boolean}>`
  color: ${props => (props.selected ? COLORS.secondary : COLORS.primary)};
  font-weight: 600;
`;
