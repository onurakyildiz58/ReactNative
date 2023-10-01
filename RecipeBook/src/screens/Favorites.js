import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { FavoritesContext } from '../context/favorites-context';

import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/Data';
import Color from '../color/Color'


function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Şuanlık Favori Tarifin Yok</Text>
        <Text style={styles.text}>Tarif Detayları Sayfasından İstediğin Tarifi Yıldıza Tıklayarak Favorilere Ekleyebilirsin</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.black,
    marginBottom: 10
  },
});