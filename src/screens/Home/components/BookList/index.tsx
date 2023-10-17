import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Pagination from './Pagination';
import {
  Directions,
  FlingGestureHandler,
  GestureHandlerRootView,
  State,
} from 'react-native-gesture-handler';
import {BookContainer} from './styles';
import {useNavigation} from '@react-navigation/native';

interface BookListProps {
  booklist: BookProps[];
}

interface BookProps {
  id: number;
  name: string;
}

const {width, height} = Dimensions.get('window');

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 1.4;
const VISIBLE_ITEMS = 3;

const Book: React.FC = ({opacity, translateX, scale, item, selectedBook}) => {
  const navigation = useNavigation();
  const handleBookDetail = () => {
    navigation.navigate('BookDetail', {book: selectedBook});
  };
  return (
    <BookContainer activeOpacity={0.8} onPress={handleBookDetail}>
      <Animated.View
        style={[
          styles.renderItem,
          {
            opacity,
            transform: [
              {
                translateX,
              },
              {scale},
            ],
          },
        ]}>
        <Image source={{uri: item.poster}} style={styles.image} />
      </Animated.View>
    </BookContainer>
  );
};

const OverflowItems = ({data, scrollXAnimated}) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={[styles.title]} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={[styles.date]}>{item.date}</Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

const BookList: React.FC = ({booklist}) => {
  const [data, setData] = React.useState(booklist);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const [selectedBookIndex, setSelectedBookIndex] = React.useState(0);
  const setActiveIndex = React.useCallback(activeIndex => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
    setSelectedBookIndex(activeIndex);
  });

  const selectedBookDetail = () => {
    const selected = data[selectedBookIndex];
    return selected;
  };

  // React.useEffect(() => {
  //   if (index === data.length - VISIBLE_ITEMS - 1) {
  //     // get new data
  //     // fetch more data
  //     const newData = [...data, ...data];
  //     setData(newData);
  //   }
  // }, [index, data]);

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: false,
    }).start();
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <FlingGestureHandler
        key="left"
        direction={Directions.LEFT}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (index === data.length - 1) {
              return;
            }
            setActiveIndex(index + 1);
          }
        }}>
        <FlingGestureHandler
          key="right"
          direction={Directions.RIGHT}
          onHandlerStateChange={ev => {
            if (ev.nativeEvent.state === State.END) {
              if (index === 0) {
                return;
              }
              setActiveIndex(index - 1);
            }
          }}>
          <View style={{flex: 1}}>
            <FlatList
              data={booklist}
              keyExtractor={(_, index) => String(index)}
              horizontal
              inverted
              contentContainerStyle={styles.contentContainer}
              scrollEnabled={false}
              removeClippedSubviews={false}
              style={{height: ITEM_HEIGHT * 1.3}}
              CellRendererComponent={({
                item,
                index,
                children,
                style,
                ...props
              }) => {
                const newStyle = [style, {zIndex: data.length - index}];
                return (
                  <View style={newStyle} index={index} {...props}>
                    {children}
                  </View>
                );
              }}
              renderItem={({item, index}) => {
                const inputRange = [index - 1, index, index + 1];
                const translateX = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [50, 0, -100],
                });
                const scale = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [0.9, 1, 1.3],
                });
                const opacity = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
                });

                return (
                  <Book
                    opacity={opacity}
                    translateX={translateX}
                    scale={scale}
                    item={item}
                    selectedBook={selectedBookDetail()}
                  />
                );
              }}
              ListFooterComponent={
                <OverflowItems data={data} scrollXAnimated={scrollXAnimated} />
              }
              ListFooterComponentStyle={{position: 'absolute', bottom: 20}}
            />
          </View>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </GestureHandlerRootView>
  );
};

export default BookList;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: SPACING * 2,
  },
  renderItem: {
    position: 'absolute',
    left: -ITEM_WIDTH / 2,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
});
