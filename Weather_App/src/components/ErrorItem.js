import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
    const {container, errorMessage } = styles
  return (
    <SafeAreaView style={container}>
      <Text style={errorMessage}>Sorry something went wrong</Text>
      <Feather name={'frown'} size={100} color={'white'} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  }
})
export default ErrorItem