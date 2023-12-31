import React, { useState } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import GameOver from './screens/GameOver';
import GameStart from './screens/GameStart';
import Game from './screens/Game'

import Color from './utils/Color'

const App = () => {
  const [userNumber, setUserNumber] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [guessedRounds, setGuessedRounds] = useState(0)

  function pickedNumberHandler(pickerNumber) {
    setUserNumber(pickerNumber)
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true)
    setGuessedRounds(numberOfRounds)
  }

  function restartHandler() {
    setUserNumber('')
    setGameOver(false)
  }

  let screen = <GameStart onPicked={pickedNumberHandler} />

  if (userNumber) {
    screen = <Game number={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver) {
    screen = <GameOver restartHandler={restartHandler} userNumber={userNumber} numberOfRounds={guessedRounds}/>
  }

  return (
    <LinearGradient
      colors={[Color.green300, Color.green500]}
      style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {screen}
      </SafeAreaView>
      <StatusBar hidden={true} />
    </LinearGradient>
  )

}

export default App