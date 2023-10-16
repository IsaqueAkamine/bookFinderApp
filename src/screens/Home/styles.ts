import styled from 'styled-components/native';
import {COLORS} from '../../constants';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.background};
`;

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding: 0 20px;
  gap: 12px;
`;

export const CategoryContainer = styled.View`
  margin-top: 10px;
`;

export const PopularContainer = styled.View`
  background-color: blueviolet;
  height: 150px;
`;

export const Title = styled.Text``;

export const TextUser = styled.Text`
  color: ${COLORS.primary};
`;
