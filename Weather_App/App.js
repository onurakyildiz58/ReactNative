import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

const App = () => {
  const [loading, useLoading] = useState(true)

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App