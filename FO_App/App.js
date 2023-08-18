import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Drawer from './screens/drawer/Drawer'

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={{ backgroundColor: '#DEE2E6' }}>
                <Image source={require('./assets/img/logoFO.png')} style={styles.logo} />
            </View>
            <Drawer />
            <StatusBar 
                backgroundColor="#DEE2E6"
                barStyle="dark-content"
                hidden={true}
                translucent={true} />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    logo: {
        width: 350,
        height: 35,
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5
    }
})
export default App