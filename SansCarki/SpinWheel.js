/* eslint-disable prettier/prettier */import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SpinWheel() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={[styles.slice, { transform: [{ rotate: '0deg' }] }]}/>
        <Text style={[styles.slice, { transform: [{ rotate: '45deg' }] }]}/>
        <Text style={[styles.slice, { transform: [{ rotate: '90deg' }] }]}/>
        <Text style={[styles.slice, { transform: [{ rotate: '135deg' }] }]}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#313131',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#cecece',
  },
  slice: {
    borderWidth: 1,
    borderColor: '#313131',
    position: 'absolute',
    height: 200,
  },
});

export default SpinWheel;
