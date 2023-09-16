import { StyleSheet, StatusBar } from 'react-native';
import GameStart from './screens/GameStart';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
    colors={['#9cecd4', '#48ac96', '#157052']}
    style={{flex:1}}
    >
      <GameStart />
      <StatusBar hidden={true}/>
    </LinearGradient>
  )

}

const styles = StyleSheet.create({})