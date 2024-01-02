import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const App = () => {
  const [yasamSuresi, setYasamSuresi] = useState(0);

  useEffect(() => {
    const dogumTarihi = new Date('2001-02-21T08:30:00Z').getTime();

    const timer = setInterval(() => {
      const simdikiZaman = new Date().getTime();
      const gecenSure = Math.floor((simdikiZaman - dogumTarihi) / 1000);
      const yaş = gecenSure / 31556926;
      setYasamSuresi(yaş.toFixed(10));
    }, 1000);

   
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{yasamSuresi}</Text>
      <StatusBar hidden={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
});

export default App;
