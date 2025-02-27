import React, { useState, useMemo, useEffect } from 'react';
import { ScrollView, View, StyleSheet, PanResponder } from 'react-native';
import { s } from 'react-native-wind';

import Picks from './Picks';
import Thumb from './Thumb';

import useVideoStore from '../states/useVideoStore';

function VideoTrim() {
    const { setStartTime, duration } = useVideoStore();
    const [slide, setSlide] = useState(0);

    const trimWidth = ((5000 / duration) * 100); // Trim kutusunun genişliği (%)
    const trackWidth = duration * 0.06; // Kaydırma pistinin genişliği (px)

    const data = useMemo(() =>
        new Array(duration).fill(0).map((_, index) => ({
            id: index,
            height: Math.floor(Math.random() * 10) + 20,
        })),
        [duration]
    );

    const updateStartTime = (newX) => {
        const newStartTime = Math.round(((newX / trackWidth) * duration) / 1000);
        setStartTime(newStartTime);
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            let newX = slide + gestureState.dx;

            if (newX < 0) newX = 0; // Başlangıcı geçmesin
            if (newX > trackWidth - (trackWidth * (trimWidth / 100))) {
                newX = trackWidth - (trackWidth * (trimWidth / 100)); // Sonu geçmesin
            }

            setSlide(newX);
            updateStartTime(newX);
        },
    });

    useEffect(() => {
        updateStartTime(slide);
    }, [slide]);

    return (
        <ScrollView horizontal contentContainerStyle={s`my-5 items-center content-center`} showsHorizontalScrollIndicator={false}>
            <View style={[s`flex-row items-center h-10 bg-gray-300 rounded-lg`, { width: trackWidth }]}>
                <Picks data={data} />
            </View>

            <View
                {...panResponder.panHandlers}
                style={[
                    s`absolute flex-row items-center h-10 bg-blue-300 overflow-hidden rounded-lg border-2 border-blue-500`,
                    { width: `${trimWidth}%`, left: slide }
                ]}
            >
                <Picks data={data} />

                <View style={styles.thumb}>
                    <Thumb side={'left'} />
                </View>
            </View>

            <View style={[styles.thumb, { left: slide + (trackWidth * (trimWidth / 100)) - 20 }]}>
                <Thumb side={'right'} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    thumb: {
        height: 40,
        position: 'absolute',
    },
});

export default VideoTrim;
