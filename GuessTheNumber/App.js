
import { StyleSheet, StatusBar } from 'react-native';
import GameStart from './screens/GameStart';


export default function App() {
  return (
    <>
      <GameStart />
      <StatusBar hidden={true}/>
    </>
  )

}

const styles = StyleSheet.create({})