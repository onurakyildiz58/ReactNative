/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Favorite from './src/screens/Favorite';
import { StatusBar } from 'react-native';
import { GlobalStyles } from './src/utils/style/Color';

const stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={GlobalStyles.colours.green500}/>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="home" component={Home} />
          <stack.Screen name="favorite" component={Favorite} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
