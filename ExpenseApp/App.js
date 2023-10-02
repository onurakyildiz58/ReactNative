import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpensesContextProvider from './src/store/expenses-context';

import AllExpenses from './src/screens/AllExpenses'
import ManageExpenses from './src/screens/ManageExpenses'
import IconBtn from './src/components/UI/IconBtn';

import { GlobalStyles } from './src/color/Styles'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ExpensesContextProvider>
        <NavigationContainer>
          <StatusBar backgroundColor={GlobalStyles.colors.gray600} barStyle="light-content" />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.gray600,
              },
              headerTintColor: GlobalStyles.colors.gray100,
            }}>
            <Stack.Screen
              name='AllExpenses'
              component={AllExpenses}
              options={({ navigation }) => ({
                title: 'Tüm Giderler',
                headerRight: ({ tintColor }) => (
                  <IconBtn
                    name="add"
                    size={30}
                    color={tintColor}
                    onPress={() => {
                      navigation.navigate('ManageExpenses');
                    }}
                  />
                )
              })}
            />
            <Stack.Screen
              name='ManageExpenses'
              component={ManageExpenses}
              options={{
                title: 'Giderleri Düzenle'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </ExpensesContextProvider>
  );
}

export default App;
