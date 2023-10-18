import { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics/physics';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)
  useEffect(() => {
    setIsRunning(false)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentPoints}</Text>
      <GameEngine
        ref={(ref) => { setGameEngine(ref) }}
        style={styles.engine}
        entities={entities()}
        running={isRunning}
        systems={[Physics]}
        onEvent={(e) => {
          switch (e.type) {
            case 'game_over':
              setIsRunning(false)
              gameEngine.stop()
              break;
            case 'new_point':
              setCurrentPoints(currentPoints + 1)
              break;
          }
        }}>
      </GameEngine>
      {!isRunning &&
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.btn}
            onPress={() => {
              setCurrentPoints(0)
              setIsRunning(true)
              gameEngine.swap(entities())
            }}>
            <Text style={styles.btnText}>
              START GAME
            </Text>
          </TouchableOpacity>
        </View>}
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  engine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 20
  },
  btnWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30
  }
});

export default App;