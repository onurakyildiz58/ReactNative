import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;