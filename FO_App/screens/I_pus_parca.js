import React from "react"
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const I_pus_parca = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>I-PUS Parça</Text>
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

export default I_pus_parca