import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { s } from 'react-native-wind';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { counterState, incrementCounter, decrementCounter, resetCounter } from '../util/store';

function Home() {
    const counter = useRecoilValue(counterState);
    const increment = useSetRecoilState(incrementCounter);
    const decrement = useSetRecoilState(decrementCounter);
    const reset = useSetRecoilState(resetCounter);

    return (
        <SafeAreaView style={s`flex-1 justify-center items-center bg-gray-100`}>
            <Text style={s`text-2xl font-bold mb-6`}>counter: {counter}</Text>
            <View style={s`flex-row`}>
                <TouchableOpacity style={s`bg-red-500 px-4 py-2 rounded-md mr-4`} onPress={() => increment()}>
                    <Text style={s`text-white font-bold`}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s`bg-green-500 px-4 py-2 rounded-md mr-4`} onPress={() => decrement()}>
                    <Text style={s`text-white font-bold`}>Decrement</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s`bg-blue-500 px-4 py-2 rounded-md`} onPress={() => reset()}>
                    <Text style={s`text-white font-bold`}>Reset</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;
