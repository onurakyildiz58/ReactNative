import React from "react"
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const Eskalasyon = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Eskalasyon</Text>
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

export default Eskalasyon