import styled from 'styled-components/native';
import {COLORS} from '../../constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
`;

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Image = styled.Image`
  width: 100%;
  height: 50%;
`;

export const FormContainer = styled.View`
  flex: 1;
  margin-top: -70px;
  background-color: ${COLORS.background}90;
  border-radius: 30px;
  padding: 0 20px;
  gap: 10px;
`;

export const Title = styled.Text`
  height: 70px;
  text-align: center;
  line-height: 70px;
  font-size: 36px;
  color: ${COLORS.primary};
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

export const NoAccountContainer = styled.View`
  flex-direction: row;
`;

export const SignUpContainer = styled.Pressable`
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.secondary};
  padding-bottom: 3px;
  align-items: flex-start;
  align-self: flex-start;
`;

export const SignUpText = styled.Text`
  color: ${COLORS.secondary};
  font-weight: bold;
`;
