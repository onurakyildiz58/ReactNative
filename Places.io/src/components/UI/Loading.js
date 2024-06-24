/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../GlobalStyle/style';

function Loading({ message }) {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.message}>{message}</Text>
            <ActivityIndicator size="large" color={GlobalStyles.colours.teal900} />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    message: {
        fontSize: 16,
        marginBottom: 12,
    },
});

export default Loading;