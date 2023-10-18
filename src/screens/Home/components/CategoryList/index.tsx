import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {selectedCategory} from '../../../../store/home/action';

import {CategoryContainer, CategoryTitle} from './styles';
interface CategoryListProps {
  categorylist: string[];
}

interface CategoryProps {
  category: string;
  index: number;
}

const Category: React.FC<CategoryProps> = ({category, index}) => {
  const dispatch = useDispatch();
  const {selectedCategory: selectedCategoryReducer} = useSelector(
    state => state.HomeReducer,
  );
  console.log('selectedCategoryReducer => ', selectedCategoryReducer);

  const handleSelectedCategory = () => {
    dispatch(selectedCategory(index));
  };

  const selected = selectedCategoryReducer === index;

  return (
    <CategoryContainer onPress={handleSelectedCategory} selected={selected}>
      <CategoryTitle selected={selected}>{category}</CategoryTitle>
    </CategoryContainer>
  );
};

const CategoryList: React.FC<CategoryListProps> = ({categorylist}) => {
  return (
    <FlatList
      data={categorylist}
      renderItem={({item, index}) => <Category category={item} index={index} />}
      horizontal
      contentContainerStyle={{
        gap: 12,
        paddingHorizontal: 20,
        paddingVertical: 4,
        marginVertical: 8,
      }}
    />
  );
};

export default CategoryList;
