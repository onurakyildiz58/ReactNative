import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { s } from 'react-native-wind';

import { useCounterStore } from '../util/store';

const Home = () => {
    const hour = useCounterStore((state) => state.hour);
    const min = useCounterStore((state) => state.min);
    const sec = useCounterStore((state) => state.sec);
    const startTimer = useCounterStore((state) => state.startTimer);
    const stopTimer = useCounterStore((state) => state.stopTimer);
    const resetTimer = useCounterStore((state) => state.resetTimer);

    return (
        <SafeAreaView style={s`flex-1 justify-center items-center bg-gray-100`}>
            <Text style={s`text-2xl font-bold mb-6`}>
                {String(hour).padStart(2, '0')}:
                {String(min).padStart(2, '0')}:
                {String(sec).padStart(2, '0')}
            </Text>
            <View style={s`flex-row`}>
                <TouchableOpacity style={s`bg-red-500 px-4 py-2 rounded-md mr-4`} onPress={startTimer}>
                    <Text style={s`text-white font-bold`}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s`bg-green-500 px-4 py-2 rounded-md mr-4`} onPress={stopTimer}>
                    <Text style={s`text-white font-bold`}>Stop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s`bg-blue-500 px-4 py-2 rounded-md`} onPress={resetTimer}>
                    <Text style={s`text-white font-bold`}>Reset</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Home;
