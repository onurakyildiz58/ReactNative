import React from 'react';
import {StyleSheet, View} from 'react-native';
import SpinWheel from './SpinWheel';

function App() {
  return (
    <View style={styles.container}>
      <SpinWheel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
