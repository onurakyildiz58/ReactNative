import React from 'react'
import { View, Image, SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Drawer from './screens/drawer/Drawer'

const App = () => {
   
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={{ backgroundColor: '#DEE2E6', shadowColor: 'black', elevation: 10 }}>
                <Image source={require('./assets/img/logoFO.png')} style={styles.logo} />
            </View>
            <Drawer />
            <StatusBar hidden={false} />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 30,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 10
    }
})

export default App