import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Feather from 'react-native-vector-icons/Feather';

import {COLORS} from '../../constants';

const {width, height} = Dimensions.get('window');

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${COLORS.background};
`;

export const HeaderContainer = styled.View`
  margin-top: ${Platform.OS === 'ios'
    ? getStatusBarHeight()
    : StatusBar.currentHeight}px;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconButton = styled.TouchableOpacity`
  background-color: ${COLORS.background};
  border-radius: 8px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
`;

export const HeaderIcon = styled(Feather)`
  color: ${COLORS.primary};
`;

export const Image = styled.ImageBackground`
  width: ${width}px;
  height: ${width * 1.2}px;
`;

export const BlurContainer = styled(BlurView)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const InfoContainer = styled.View`
  padding: 8px 20px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${COLORS.white};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
`;

export const RatingText = styled.Text`
  color: ${COLORS.white};
  font-size: 14px;
`;

export const BodyContainer = styled.View`
  padding: 8px 20px;
`;

export const InfoCategoryContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const CategoryContainer = styled.View`
  background-color: ${COLORS.secondary};
  padding: 4px 8px;
  border-radius: 20px;
`;

export const CategoryText = styled.Text`
  color: ${COLORS.white};
  font-size: 12px;
`;

export const ActionContainer = styled.View`
  margin-top: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.TouchableOpacity`
  padding: 0 28px;
  background-color: ${COLORS.primary};
  border-radius: 14px;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  height: 40px;
`;

export const ButtonText = styled.Text`
  color: ${COLORS.white};
  font-size: 18px;
  font-weight: 600;
`;

export const IconBook = styled(Feather)`
  color: ${COLORS.white};
`;

export const ActionIconsContainer = styled.View`
  flex-direction: row;
  gap: 14px;
`;

export const ActionIconButton = styled.TouchableOpacity`
  background-color: #f3ede1;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ActionIcon = styled(Feather)`
  color: ${COLORS.primary};
`;

export const AuthorContainer = styled.View`
  margin: 20px 0;
  flex-direction: row;
  border-radius: 14px;
  background-color: #faf8f3;
  align-self: flex-start;
  align-items: center;
`;

export const AuthorImage = styled.Image`
  width: 70px;
  height: 70px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
`;

export const AuthorInfoContainer = styled.View`
  padding: 0 24px 0 12px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  gap: 6px;
`;

export const AuthorName = styled.Text`
  font-size: 16px;
  max-width: 300px;
  color: ${COLORS.primary};
`;

export const AuthorInfoText = styled.Text`
  color: ${COLORS.primary};
`;

export const BookInfoContainer = styled.View``;

export const BookDescription = styled.Text`
  color: ${COLORS.primary};
  letter-spacing: 2px;
  line-height: 18px;
  text-align: justify;
`;
