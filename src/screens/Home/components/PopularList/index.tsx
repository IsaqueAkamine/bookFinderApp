import React from 'react';
import {Dimensions, FlatList, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

import {CardContainer, Container, Title} from './styles';

const POPULARBOOKLIST = [
  {
    title: 'Summer festival',
    location: 'Bucharest, Romania',
    date: 'Aug 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
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
    title: 'Afro vibes',
    location: 'Mumbai, India',
    date: 'Nov 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
  },
];

const PopularCard = item => {
  return (
    <CardContainer key={item.title}>
      <Image
        source={{uri: item.poster}}
        style={{width: width * 0.85, height: width * 1.3, borderRadius: 14}}
      />
    </CardContainer>
  );
};

const PopularList: React.FC = () => {
  return (
    <Container>
      <Title>Popular</Title>
      {POPULARBOOKLIST.map(item => PopularCard(item))}
    </Container>
  );
};

export default PopularList;
