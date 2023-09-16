import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Color from '../utils/Color'

const PhoneGuess = (props) => {
    return (
        <View style={styles.guessWrapper}>
            <Text style={styles.guessText}>Phone Guess</Text>
            <Text style={styles.guess}>{props.guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guessWrapper: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: Color.gray900,
        paddingHorizontal: 60,
        borderRadius: 10,
        backgroundColor: Color.green500
    },
    guessText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Color.white
    },
    guess: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Color.white
    }
})

export default PhoneGuess