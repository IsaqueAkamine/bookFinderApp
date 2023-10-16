import React from 'react';

import {CategoryContainer, CategoryTitle} from './styles';
import {FlatList} from 'react-native';

interface CategoryListProps {
  categorylist: string[];
}

interface CategoryProps {
  category: string;
}

const Category: React.FC<CategoryProps> = ({category}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category}</CategoryTitle>
    </CategoryContainer>
  );
};

const CategoryList: React.FC<CategoryListProps> = ({categorylist}) => {
  return (
    <FlatList
      data={categorylist}
      renderItem={({item}) => <Category category={item} />}
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
