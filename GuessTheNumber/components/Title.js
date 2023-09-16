import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = () => {
    return (
        <Text style={styles.title}>Guess The Number</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
        paddingVertical: 8,
        paddingHorizontal: 27,
        marginBottom: 50
    }
})

export default Title