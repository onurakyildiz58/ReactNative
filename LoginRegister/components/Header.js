import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View } from 'react-native'

const Header = (props) => {
  return (
    <SafeAreaView style={{alignItems: 'center', marginTop: 50}}>
      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center', textTransform: 'uppercase'}}>{props.name}</Text>
      <StatusBar 
        hidden={true}
        translucent={true} />
    </SafeAreaView>
  )
}

export default Header
