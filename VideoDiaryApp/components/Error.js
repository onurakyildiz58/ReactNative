import React from 'react';
import { Text, View } from 'react-native';
import { s } from 'react-native-wind';

function Error({ message }) {
  return (
    <View style={s`flex-1 justify-center items-center p-8`}>
      <Text style={s`text-center text-red-500 mt-6`}>{message}</Text>
    </View>
  );
}

export default Error;
