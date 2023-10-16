import React from 'react';

import {Container, Icon, Input} from './styles';
import {StyleSheet, TextInputProps} from 'react-native';
import {COLORS} from '../../constants';

interface SearchProps extends TextInputProps {}

const Search: React.FC<SearchProps> = ({...rest}) => {
  return (
    <Container style={styles.container}>
      <Icon name="search" size={24} />
      <Input {...rest} placeholderTextColor={`${COLORS.primary}80`} />
    </Container>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
});
