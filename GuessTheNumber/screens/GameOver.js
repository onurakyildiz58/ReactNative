import React, { useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Color from '../utils/Color'
import PrimaryButton from '../components/PrimaryButton'

const GameOver = ({ restartHandler, numberOfRounds, userNumber }) => {
    const reset = () => {
        restartHandler()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>You Died!</Text>
            <Text style={styles.text2}>
                I just need
                <Text> {numberOfRounds} </Text> 
                round for the number 
                <Text> {userNumber} LOSER</Text>
            </Text>
            <PrimaryButton children={'Try To Die again'} func={() => reset()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        color: Color.red,
        fontSize: 75,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text2: {
        color: Color.red,
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default GameOver