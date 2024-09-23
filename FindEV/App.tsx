/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Favorite from './src/screens/Favorite';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';

import { StatusBar } from 'react-native';
import { GlobalStyles } from './src/utils/style/Color';

const stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Register" component={Register} />
    </stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="home" component={Home} />
      <stack.Screen name="favorite" component={Favorite} />
    </stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={GlobalStyles.colours.green500} />
      <Navigation />
    </>
  );
}

export default App;
