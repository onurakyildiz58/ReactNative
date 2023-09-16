import React, { useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Color from '../utils/Color'
import PrimaryButton from '../components/PrimaryButton'

const GameOver = ({ restartHandler }) => {
    const reset = () => {
        restartHandler()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>You Died!</Text>
            <PrimaryButton children={'Try To Die again'} func={() => reset()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Color.red,
        fontSize: 75,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default GameOver