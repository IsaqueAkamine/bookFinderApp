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
    <Container>
      <Image source={{uri: book.poster}}>
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
              <RatingText>, 1037 Pages, 1936</RatingText>
            </RatingContainer>
          </InfoContainer>
        </BlurContainer>
      </Image>

      <BodyContainer>
        {/* INFO CATEGORY */}
        <InfoCategoryContainer>
          <CategoryContainer>
            <CategoryText>Novel</CategoryText>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryText>Romantic</CategoryText>
          </CategoryContainer>
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
          <AuthorImage source={{uri: book.poster}} />
          <AuthorInfoContainer>
            <AuthorName>Margaret Mitchell</AuthorName>
            <AuthorInfoText>Authors</AuthorInfoText>
          </AuthorInfoContainer>
        </AuthorContainer>

        {/* BOOK INFO SECTION */}
        <BookInfoContainer>
          <BookDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, ea
            iusto. Minima rerum consequuntur corporis ex ullam dicta repudiandae
            odit natus voluptatibus consectetur. Cum labore, atque sapiente
            commodi ad ex.
          </BookDescription>
        </BookInfoContainer>
      </BodyContainer>
    </Container>
  );
};

export default BookDetail;
