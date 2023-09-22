import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import RowText from '../components/RowText'

const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={styles.wrapper} >
      <View style={styles.container} >
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color='#10451D'
        />
        <Text style={styles.tempreture} >{`${temp}°`}</Text>
        <Text style={styles.feels} >{`Feels like: ${feels_like}°`}</Text>
        <RowText
          msg1={`High: ${temp_max}° `}
          msg2={`Low: ${temp_min}°`}
          msgwrapper={styles.highlowwrapper}
          msg1style={styles.highlow}
          msg2style={styles.highlow} />
      </View>
      <RowText
        msg1={weather[0]?.description}
        msg2={weatherType[weatherCondition]?.message}
        msgwrapper={styles.bodyWrapper}
        msg1style={styles.msg}
        msg2style={styles.description} />
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        hidden={true}
        translucent={true}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#B7EFC5'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  tempreture: {
    color: '#155D27',
    marginTop: 20,
    fontSize: 48
  },
  feels: {
    fontSize: 40,
    marginBottom: 20,
    color: '#155D27'
  },
  highlow: {
    color: '#155D27',
    fontSize: 20,
  },
  highlowwrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    backgroundColor: '#B7EFC5',
    alignItems: 'center'
  },
  description: {
    fontSize: 50,
    marginBottom: 20,
    color: '#155D27',
    textAlign: 'center'
  },
  msg: {
    fontSize: 42,
    color: '#155D27'
  }
});

export default CurrentWeather