import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { s } from 'react-native-wind';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

function Progress({ progress }) {
    const width = useSharedValue(0);

    const animatedWidth = useAnimatedStyle(() => {
        return {
            width: `${width.value}%`,
        };
    });

    useEffect(() => {
        width.value = withTiming(progress);
    }, [progress]);
    return (
        <View>
            <View style={s`w-72 h-2 border-2 border-emerald-800 rounded-full overflow-hidden`}>
                <Animated.View style={[s`absolute top-0 left-0 h-full bg-emerald-400 rounded-full`, animatedWidth]} />
            </View>
            <Text style={s`text-black mt-2 text-center`}>{progress}% tamamlandı</Text>
        </View>
    )
}

export default Progress;
