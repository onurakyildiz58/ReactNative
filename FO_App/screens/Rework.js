import React from "react"
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const Rework = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Rework</Text>
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

export default Rework