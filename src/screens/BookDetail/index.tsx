import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  ActionContainer,
  ActionIcon,
  ActionIconButton,
  ActionIconsContainer,
  AuthorContainer,
  AuthorImage,
  AuthorInfoContainer,
  AuthorInfoText,
  AuthorName,
  BlurContainer,
  BodyContainer,
  BookDescription,
  BookInfoContainer,
  ButtonContainer,
  ButtonText,
  CategoryContainer,
  CategoryText,
  Container,
  HeaderContainer,
  HeaderIcon,
  IconBook,
  IconButton,
  Image,
  InfoCategoryContainer,
  InfoContainer,
  RatingContainer,
  RatingText,
  Title,
} from './styles';

// interface BookProps {
//   title: string;
//   location: string;
//   date: string;
//   poster: string;
// }

// interface BookDetailProps {
//   book: BookProps;
// }

const BookDetail: React.FC = () => {
  const {book} = useRoute().params;
  const navigation = useNavigation();

  const handleBackNavigation = () => {
    navigation.goBack();
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Image
        source={{
          uri: 'https' + book.volumeInfo.imageLinks.thumbnail.substr(4),
        }}>
        {/* HEADER ICONS */}
        <HeaderContainer>
          <IconButton onPress={handleBackNavigation}>
            <HeaderIcon name="chevron-left" size={18} />
          </IconButton>
          <IconButton>
            <HeaderIcon name="heart" size={18} />
          </IconButton>
        </HeaderContainer>

        {/* INFO SECTION */}
        <BlurContainer
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white">
          <InfoContainer>
            <Title>{book.title}</Title>
            <RatingContainer>
              <RatingText>5.2</RatingText>
              <RatingText>, {book.volumeInfo.pageCount} Pages</RatingText>
            </RatingContainer>
          </InfoContainer>
        </BlurContainer>
      </Image>

      <BodyContainer>
        {/* INFO CATEGORY */}
        <InfoCategoryContainer>
          {book.volumeInfo.categories.map((category, index) => {
            return (
              <CategoryContainer key={String(index)}>
                <CategoryText>{category}</CategoryText>
              </CategoryContainer>
            );
          })}
          {/* <CategoryContainer>
            <CategoryText>Romantic</CategoryText>
          </CategoryContainer> */}
        </InfoCategoryContainer>

        {/* ACTION SECTION */}
        <ActionContainer>
          <ButtonContainer>
            <ButtonText>Book Study</ButtonText>
            <IconBook name="book-open" size={18} />
          </ButtonContainer>
          <ActionIconsContainer>
            <ActionIconButton>
              <ActionIcon name="download" size={18} />
            </ActionIconButton>
            <ActionIconButton>
              <ActionIcon name="share" size={18} />
            </ActionIconButton>
          </ActionIconsContainer>
        </ActionContainer>

        {/* AUTHOR SECTION */}
        <AuthorContainer>
          <AuthorImage
            source={{
              uri: 'https' + book.volumeInfo.imageLinks.thumbnail.substr(4),
            }}
            resizeMode="cover"
          />
          <AuthorInfoContainer>
            <AuthorName numberOfLines={1} ellipsizeMode="tail">
              {book.volumeInfo.authors?.join(', ')}
            </AuthorName>
            <AuthorInfoText>Authors</AuthorInfoText>
          </AuthorInfoContainer>
        </AuthorContainer>

        {/* BOOK INFO SECTION */}
        <BookInfoContainer>
          <BookDescription>{book.volumeInfo.description}</BookDescription>
        </BookInfoContainer>
      </BodyContainer>
    </Container>
  );
};

export default BookDetail;
