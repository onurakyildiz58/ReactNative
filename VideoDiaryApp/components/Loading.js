import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { s } from 'react-native-wind';

function Loading({ message }) {
  return (
    <View style={s`flex-1 justify-center items-center p-8`}>
      <Text style={s`text-base mb-3`}>{message}</Text>
      <ActivityIndicator size="large" color={s`text-black`.color}/>
    </View>
  );
}

export default Loading;
