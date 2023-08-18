import React from "react"
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const Eta = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>ETA</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        fontWeight: '500',
        fontSize: 32,
    }
})

export default Eta