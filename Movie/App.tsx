import React from 'react';
import { StatusBar } from 'react-native';
import Tabs from './src/screens/Tabs';

function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
      <Tabs />
    </>
  );
}

export default App;
