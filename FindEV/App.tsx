/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';

import { GlobalStyles } from './src/utils/style/Color';

import AuthContextProvider, { AuthContext } from './src/utils/store/contextAuth';
import Loading from './src/components/ui/Loading';

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
      <stack.Screen name="profile" component={Profile} />
    </stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryToLogin, setIsTryToLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        const localID = await AsyncStorage.getItem('localId');
        if (token && localID) {
          authCtx.authenticate(token, localID);
        }
        setIsTryToLogin(false);
      } catch (error) {
        console.error('Failed to load token from AsyncStorage:', error);
      }
    };

    loadAuthData();
  }, [authCtx]);

  if (isTryToLogin) {
    return <Loading message={''} />;
  }

  const theme = authCtx.theme;

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme === 'dark' ? GlobalStyles.colours.black : GlobalStyles.colours.green500}
      />
      <Navigation />
    </>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
}

export default App;
