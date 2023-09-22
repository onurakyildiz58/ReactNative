import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Header from './components/Header'
import Login from './screens/Login'
import Register from './screens/Register'
import UserDash from './screens/UserDash'

import { firebase } from './config'

const stack = createStackNavigator()

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, SetUser] = useState();

  function onAuthStateChange(user) {
    SetUser(user)
    if (initializing) {
      setInitializing(false)
    }
  }

  useEffect(() => {
    const subs = firebase.auth().onAuthStateChanged(onAuthStateChange)
    return subs
  }, [])

  if (initializing) {
    return null
  }
  if (!user) {
    return (
      <stack.Navigator>
        <stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
            headerStyle: {height: 100,borderBottomRightRadius: 10,borderBottomLeftRadius: 10,backgroundColor: '#DEE2E6',shadowColor: 'black',elevation: 25}
          }}/>
        <stack.Screen
          name='Register'
          component={Register}
          options={{
            headerShown: false,
            headerStyle: {height: 100,borderBottomRightRadius: 10,borderBottomLeftRadius: 10,backgroundColor: '#DEE2E6',shadowColor: 'black',elevation: 25}
          }}/>
      </stack.Navigator>
    )
  }
  return (
    <stack.Navigator>
      <stack.Screen
        name='Dashboard'
        component={UserDash}
        options={{
          headerShown: false,
          headerStyle: {height: 100,borderBottomRightRadius: 10,borderBottomLeftRadius: 10,backgroundColor: '#DEE2E6',shadowColor: 'black',elevation: 25}
        }}
      />
    </stack.Navigator>
  )
}


export default () =>{
  return(
    <NavigationContainer>
      <App />
      <StatusBar hidden={true} />
    </NavigationContainer>
  )
}
