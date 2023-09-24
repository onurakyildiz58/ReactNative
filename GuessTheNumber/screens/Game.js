import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Text, FlatList } from 'react-native';
import Title from '../components/Title';
import PhoneGuess from '../components/PhoneGuess';
import PrimaryButton from '../components/PrimaryButton';
import Logs from '../components/Logs';

function generateRandomBetween(min, max, exclude) {
    let rndNum;
    do {
        rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (rndNum === exclude);
    return rndNum;
}


const Game = ({ number, onGameOver }) => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(99);
    const [guess, setGuess] = useState(generateRandomBetween(min, max, number));
    const [rounds, setRounds] = useState([guess])

    // Ensure the number is within the 0-99 range
    number = Math.max(0, Math.min(99, number));


    useEffect(() => {
        if (guess === number) {
            onGameOver(rounds.length);
        }
    }, [guess, number, onGameOver]);

    function nextGuess(direction) {
        if ((direction === 'higher' && guess > number) || (direction === 'lower' && guess < number)) {
            Alert.alert('Don\'t Lie', 'You Are Lying', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }

        let newMin = min;
        let newMax = max;

        if (direction === 'higher') {
            newMin = guess + 1;
        } else {
            newMax = guess - 1;
        }

        const currGuess = generateRandomBetween(newMin, newMax, guess);

        setMin(newMin);
        setMax(newMax);
        setGuess(currGuess);
        setRounds(prevGuessNumber => [currGuess, ...prevGuessNumber]);
    }

    const roundLenght = rounds.length;

    return (
        <View style={styles.container}>
            <Title />
            <PhoneGuess guess={guess} />
            <View style={styles.btnWrapper}>
                <PrimaryButton children={'+'} func={() => nextGuess('higher')} />
                <PrimaryButton children={'-'} func={() => nextGuess('lower')} />
            </View>
            <View style={{flex: 1, paddingHorizontal: 10 }}>
                <FlatList
                    data={rounds}
                    renderItem={(itemData) =>
                        <Logs
                            round={roundLenght - itemData.index}
                            guess={itemData.item}
                        />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
    },
    btnWrapper: {
        flexDirection: 'row',
        margin: 20,
    }
});

export default Game;
