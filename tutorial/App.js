import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Counter from './src/demo/Counter'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'


const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async () => {
    try {
      const result = await fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + location.coords.latitude + '&lon=' + location.coords.longitude + '&appid=' + WEATHER_API_KEY)
      const jsonData = await response.json()
      setWeather(jsonData)
      setLoading(false)
    } catch (errorMsg) {
      setErrorMsg('Data couldnt fetched')
    }

  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status != 'granted') {
        setErrorMsg('Permission to acces location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location)
      await fetchWeatherData()
    })();
  }, []);

  if (location) {
    console.log(location);
  }

  const { container } = styles
  if (loading) {
    return (
      <View styles={container} >
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
})

export default App