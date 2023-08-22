import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Header from './components/Header'
import Login from './screens/Login'
import Register from './screens/Register'
import UserDash from './screens/UserDash'

const stact = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <stact.Navigator>
        <stact.Screen
          name='Login'
          component={Login}
          options={{
            headerStyle: {
              height: 100,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: '#DEE2E6',
              shadowColor: 'black',
              elevation: 25
            }
          }}
        />
        <stact.Screen
          name='Register'
          component={Register}
          options={{
            headerStyle: {
              height: 100,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: '#DEE2E6',
              shadowColor: 'black',
              elevation: 25
            }
          }}
        />
      </stact.Navigator>
    </NavigationContainer>
  )
}


export default App
