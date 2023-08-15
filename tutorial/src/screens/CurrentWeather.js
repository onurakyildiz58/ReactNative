import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highlowwrapper, highlow, bodyWrapper, description, msg } = styles
  return (
    <SafeAreaView style={wrapper} >
      <View style={container} >
        <Feather name='sun' size={100} color={'black'} />
        <Text style={temp} >temp: 6</Text>
        <Text style={feels} >feels: 8</Text>
        <RowText
          msg1={'High: 8'}
          msg2={'Low: 6'}
          msgwrapper={highlowwrapper}
          msg1style={highlow} 
          msg2style={highlow}/>
      </View>
      <RowText
          msg1={'its sunny'}
          msg2={weatherType['Mist'].msg}
          msgwrapper={bodyWrapper}
          msg1style={msg}
          msg2style={description}/>
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
    fontSize: 20,
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
    fontSize: 35,
    marginBottom: 20
  },
  msg: {
    fontSize: 42
  }
});

export default CurrentWeather