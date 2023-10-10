import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GlobalStyles } from './src/Styles/Colors';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Welcome from './src/screens/Welcome';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.gray700 },
        headerTintColor: GlobalStyles.colors.white,
        contentStyle: { backgroundColor: GlobalStyles.colors.gray100 },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.gray700 },
        headerTintColor: GlobalStyles.colors.white,
        contentStyle: { backgroundColor: GlobalStyles.colors.gray100 },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
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
      <StatusBar backgroundColor={GlobalStyles.colors.gray700}/>
      <Navigation />
    </>
  )
}


export default App