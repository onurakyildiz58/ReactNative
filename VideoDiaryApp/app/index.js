import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomIconHeader from "../components/CustomIconHeader";
import { s } from 'react-native-wind';
import { useRouter } from 'expo-router';

function HomeScreen() {
  const router = useRouter();
  
  return (
    <View style={s`flex-1`}>
      <CustomIconHeader title={"Ana Sayfa"} func={() => router.push('/add')} name={"add-circle-outline"} size={30} position={"right"} />
      <TouchableOpacity
        style={s`mt-6 p-4 bg-red-500 rounded-lg`}
        onPress={() => router.push(
          {
            pathname: "/[id]",
            params:  {id: 5}
          }
        )}>
        <Text style={s`text-white`}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
