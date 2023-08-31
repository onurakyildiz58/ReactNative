import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
    require('../assets/bg/image1.jpg'),
    require('../assets/bg/image2.jpg'),
    require('../assets/bg/image3.jpg'),
];

const Home = () => {
    const scrollViewRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(newIndex);
            scrollViewRef.current.scrollTo({ x: newIndex * width, animated: true });
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={event => {
                    const newIndex = Math.floor(
                        event.nativeEvent.contentOffset.x / width
                    );
                    setCurrentIndex(newIndex);
                }}>
                {images.map((image, index) => (
                    <Image key={index} source={image} style={styles.image} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width,
        height: 700,
    }
})

export default Home