import React from 'react';

import {
  BookContainer,
  CategoryContainer,
  Container,
  HeaderContainer,
  PopularContainer,
  SafeAreaContainer,
  TextUser,
  Title,
} from './styles';

import CategoryList from './components/CategoryList';
import BookList from './components/BookList';
import {ScrollView} from 'react-native';
import PopularList from './components/PopularList';

const CATEGORYLIST = ['Novel', 'Psychology', 'Mystical', 'Educational'];
const BOOKLIST = [
  {
    title: 'Afro vibes',
    location: 'Mumbai, India',
    date: 'Nov 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
  },
  {
    title: 'Jungle Party',
    location: 'Unknown',
    date: 'Sept 3rd, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
  },
  {
    title: '4th Of July',
    location: 'New York, USA',
    date: 'Oct 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
  },
  {
    title: 'Summer festival',
    location: 'Bucharest, Romania',
    date: 'Aug 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
  },
];

const Home: React.FC = () => {
  return (
    <SafeAreaContainer>
      <Container>
        <ScrollView>
          <HeaderContainer>
            <TextUser>Hi Razieh!</TextUser>
            <TextUser>SEARCH INPUT</TextUser>
          </HeaderContainer>
          {/* CATEGORY LIST */}
          <CategoryContainer>
            <CategoryList categorylist={CATEGORYLIST} />
          </CategoryContainer>

          {/* BOOK LIST */}
          <BookList booklist={BOOKLIST} />

          <PopularList />
        </ScrollView>
      </Container>
    </SafeAreaContainer>
  );
};

export default Home;
