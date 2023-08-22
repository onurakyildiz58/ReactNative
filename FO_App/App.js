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
        width: 300,
        height: 30,
        alignSelf: 'center',
        marginTop: 30
    }
})
export default App