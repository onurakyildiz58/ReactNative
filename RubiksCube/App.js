import React from 'react';
import { View, StyleSheet } from 'react-native';
import CubeSides from './src/CubeSides';

function App() {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 120}}>
        <CubeSides />
      </View>
      <View style={{marginHorizontal: 5, paddingVertical: 140}}>
        <CubeSides />
        <CubeSides />
        <CubeSides />
        <CubeSides />
      </View>
      <View style={{marginBottom: 120}}>
        <CubeSides />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    flexDirection: 'row'
  }
});

export default App;