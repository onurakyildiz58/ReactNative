import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  useEffect(() => {
    // Load favorite meal IDs from AsyncStorage when the component mounts
    AsyncStorage.getItem('favoriteMealIds')
      .then((storedIds) => {
        if (storedIds) {
          setFavoriteMealIds(JSON.parse(storedIds));
        }
      })
      .catch((error) => {
        console.error('Error loading favorite meal IDs:', error);
      });
  }, []);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);

    // Save favorite meal IDs to AsyncStorage
    AsyncStorage.setItem('favoriteMealIds', JSON.stringify([...favoriteMealIds, id]));
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );

    // Save updated favorite meal IDs to AsyncStorage
    AsyncStorage.setItem(
      'favoriteMealIds',
      JSON.stringify(favoriteMealIds.filter((mealId) => mealId !== id))
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
