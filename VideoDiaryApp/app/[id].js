import React from 'react';
import { Text, View } from 'react-native';
import CustomIconHeader from '../components/CustomIconHeader';
import { s } from 'react-native-wind';
import { useLocalSearchParams, useRouter } from 'expo-router';

function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View style={s`flex-1`}>
      <CustomIconHeader title={"Detay"} func={() => router.back()} name={"arrow-back-outline"} size={30} position={"left"} />
        <Text>{id}</Text>
    </View>
  )

}

export default DetailScreen;
