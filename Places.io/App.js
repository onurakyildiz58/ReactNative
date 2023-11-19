import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {View, StatusBar } from 'react-native';
import { GlobalStyles } from './src/GlobalStyle/style';

import AddPlaces from './src/screens/AddPlaces';
import ShowPlaces from './src/screens/ShowPlaces';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colours.amber700,
          },
          headerTintColor: GlobalStyles.colours.amber100,
        }}>
          <Stack.Screen name='ShowPlaces' component={ShowPlaces} options={{title: 'Your Favorite Places'}} />
          <Stack.Screen name='AddPlaces' component={AddPlaces} options={{title: 'Add Favorite Place'}} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={ GlobalStyles.colours.amber700 } />
    </>
  );
}

export default App