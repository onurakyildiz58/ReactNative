import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const Header = (props) => {
  return (
    <SafeAreaView style={{alignItems: 'center', marginTop: 50}}>
      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center', textTransform: 'uppercase'}}>{props.name}</Text>
    </SafeAreaView>
  )
}

export default Header
