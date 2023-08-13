import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highlowwrapper, highlow, bodyWrapper, description, msg } = styles
  return (
    <SafeAreaView style={wrapper} >
      <View style={container} >
        <Feather name='sun' size={100} color={'black'} />
        <Text style={temp} >temp: 6</Text>
        <Text style={feels} >feels: 8</Text>
        <View style={highlowwrapper} >
          <Text style={highlow} >High: 8 </Text>
          <Text style={highlow} > Low: 6</Text>
        </View>
      </View>
      <View style={bodyWrapper} >
        <Text style={description} >its sunny</Text>
        <Text style={msg}>Wear t-shirts</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  temp: {
    color: 'black',
    marginTop: 20,
    fontSize: 48
  },
  feels: {
    fontSize: 40,
    marginBottom: 20,
    color: 'black'
  },
  highlow: {
    color: 'black',
    fontSize: 20
  },
  highlowwrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    backgroundColor: 'skyblue',
    alignItems: 'center'
  },
  description: {
    fontSize: 48
  },
  msg: {
    fontSize: 42,
    marginBottom: 30
  }
});

export default CurrentWeather