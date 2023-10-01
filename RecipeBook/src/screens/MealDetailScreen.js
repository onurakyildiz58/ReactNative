import React, { useLayoutEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FavoritesContext } from '../context/favorites-context';

import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';

import { MEALS } from '../data/Data';
import Color from '../color/Color'
import Icon from '../components/Icon'

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isMealFav = favoriteMealsCtx.ids.includes(mealId);

  function addFavoriteHandler() {
    if (isMealFav) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Icon
          name={isMealFav ? 'star': 'star-o'}
          func={addFavoriteHandler} />
      }
    })
  }, [navigation, addFavoriteHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Malzemeler</Subtitle>
          <List data={selectedMeal.ingredients} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    height: 350,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: Color.black,
  },
  detailText: {
    color: Color.black
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});