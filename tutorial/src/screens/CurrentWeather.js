import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper} >
      <View style={styles.container} >
        <Feather name='sun' size={100} color={'black'} />
        <Text style={styles.temp} >6</Text>
        <Text style={styles.feels} >8</Text>
        <View style={styles.highlowwrapper} >
          <Text style={styles.highlow} >High: 8 </Text>
          <Text style={styles.highlow} > Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper} >
        <Text style={styles.description} >its sunny</Text>
        <Text style={styles.msg}>Wear t-shirts</Text>
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
    marginTop: 50,
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 20,
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
    fontSize: 42
  }
});

export default CurrentWeather