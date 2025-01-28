import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/screens/Home';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Loading from './src/components/ui/Loading';
import { GlobalStyles } from './src/utils/styles/Color';

import AuthContextProvider, { AuthContext } from './src/utils/ContextAPI/AuhtContext';
import LangContextProvider, { LanguageContext } from './src/utils/ContextAPI/LanguageContext';
import { languages } from './src/utils/languages/Language';


const stack = createNativeStackNavigator();

const translationMap = {
  TR: languages[0],
  ENG: languages[1],
};

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
  const langCtx = useContext(LanguageContext);
  const translations = translationMap[langCtx.lang];

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
    return <Loading message={translations.loginLoadingStatus} />;
  }

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalStyles.colours.gray100}
      />
      <Navigation />
    </>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <LangContextProvider>
        <Root />
      </LangContextProvider>
    </AuthContextProvider>
  );
}

export default App;