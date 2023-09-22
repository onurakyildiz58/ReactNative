import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import Title from '../components/Title'
import PhoneGuess from '../components/PhoneGuess';
import PrimaryButton from '../components/PrimaryButton'


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let min = 1
let max = 100

const Game = ({ number, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, number);
    const [guess, setGuess] = useState(initialGuess)

    useEffect(() => {
        if(guess === number){
            onGameOver()
        }
    }, [guess, number, onGameOver])

    function nextGuess(direction) {
        if ((direction === 'higher' && guess > number) || (direction === 'lower' && guess < number)) {
            Alert.alert('Dont Lie', 'You Are Lying', [{ text: 'sorry', style: 'cancel' }])
            return
        }
        if (direction === 'higher') {
            min = guess
        }
        else {
            max = guess + 1
        }
        const currGuess = generateRandomBetween(min, max, guess)
        setGuess(currGuess)
    }

    return (
        <View style={styles.container}>
            <Title />
            <PhoneGuess guess={guess} />
            <View style={styles.btnWrapper}>
                <PrimaryButton children={'+'} func={() => nextGuess('higher')} />
                <PrimaryButton children={'-'} func={() => nextGuess('lower')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
    },
    btnWrapper: {
        flexDirection: 'row',
        margin: 20
    }
})

export default Game
