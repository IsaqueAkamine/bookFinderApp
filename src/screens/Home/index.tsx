import React, {useEffect, useState} from 'react';

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
import {ActivityIndicator, ScrollView} from 'react-native';
import PopularList from './components/PopularList';
import Input from '../../components/Input';
import Search from '../../components/Search';
import api from '../../services/api';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../../store/home/action';
import {COLORS} from '../../constants';

// const CATEGORYLIST = ['Novel', 'Psychology', 'Mystical', 'Educational'];
// const BOOKLIST = [
//   {
//     title: 'Afro vibes',
//     location: 'Mumbai, India',
//     date: 'Nov 17th, 2020',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
//   },
//   {
//     title: 'Jungle Party',
//     location: 'Unknown',
//     date: 'Sept 3rd, 2020',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
//   },
//   {
//     title: '4th Of July',
//     location: 'New York, USA',
//     date: 'Oct 11th, 2020',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
//   },
//   {
//     title: 'Summer festival',
//     location: 'Bucharest, Romania',
//     date: 'Aug 17th, 2020',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
//   },
// ];

const CATEGORYLIST = [
  'Fiction',
  'Nonfiction',
  'Science',
  'History',
  'Technology',
  'Self-help',
  'Romance',
  'Mystery',
];
const Home: React.FC = () => {
  const [bookList, setBookList] = useState(null);

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.HomeReducer);

  const fetchData = () => {
    try {
      api
        .get('/volumes?q=subject:fiction&maxResults=5')
        .then(res => {
          setBookList(res.data);
          // console.log('API FETCH: ', res.data);
        })
        .catch(error => {
          throw new error(error);
        })
        .finally(() => dispatch(Loading(false)));
    } catch (error) {
      console.log('API ERROR: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaContainer>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderContainer>
            <TextUser>Hi Razieh!</TextUser>
            <Search placeholder="Search Title Book or Authors" />
          </HeaderContainer>

          {/* CATEGORY LIST */}
          <CategoryContainer>
            <CategoryList categorylist={CATEGORYLIST} />
          </CategoryContainer>

          {/* BOOK LIST */}
          {/* {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <BookList booklist={bookList} />
          )} */}

          {isLoading && (
            <ActivityIndicator size="large" color={COLORS.primary} />
          )}
          {bookList && <BookList booklist={bookList} />}

          <PopularList />
        </ScrollView>
      </Container>
    </SafeAreaContainer>
  );
};

export default Home;
