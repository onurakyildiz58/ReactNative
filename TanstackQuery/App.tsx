import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Tabs from './src/screens/Tabs';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
      <Tabs />
    </QueryClientProvider>
  );
}

export default App;
