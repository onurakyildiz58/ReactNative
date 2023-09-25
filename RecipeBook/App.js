import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';

import Categories from './src/screens/Categories'
import MealsView from './src/screens/MealsView';
import MealDetailScreen from './src/screens/MealDetailScreen';
import Favorites from './src/screens/Favorites';

import Color from './src/color/Color'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer style={styles.container1}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Color.blue200 },
            headerTintColor: Color.black,
            contentStyle: { backgroundColor: Color.blue100 },
          }}>
          <Stack.Screen
            name="Kategoriler"
            component={Categories} />
          <Stack.Screen
            name="Menüler"
            component={MealsView} />
          <Stack.Screen
            name="Tarif Detayları"
            component={MealDetailScreen} />
          <Stack.Screen
            name="Favoriler"
            component={Favorites} />
        </Stack.Navigator>
        <StatusBar hidden={true} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App