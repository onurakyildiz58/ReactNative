import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import CategoryGrid from '../components/CategoryGrid';

import { CATEGORIES } from '../data/Data';
import Color from '../color/Color';
import Icon from '../components/Icon';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('Menüler', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler} />
    );
  }

  function goFavoriteHandler(){
    navigation.navigate('Favoriler');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Icon name={'star'} func={goFavoriteHandler}/>
      }
    })
  }, [navigation, goFavoriteHandler]);

  return (
    <FlatList style={{ backgroundColor: Color.brown500 }}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;