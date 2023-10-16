import React from 'react';
import {View, TouchableOpacity} from 'react-native';

const Pagination = ({currentIndex, totalPages, onPressDot}) => {
  const dots = Array.from({length: totalPages}, (_, index) => index + 1);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {dots.map(dotIndex => (
        <TouchableOpacity
          key={dotIndex}
          onPress={() => onPressDot(dotIndex)}
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: dotIndex === currentIndex ? 'blue' : 'lightgray',
            margin: 5,
          }}
        />
      ))}
    </View>
  );
};

export default Pagination;
