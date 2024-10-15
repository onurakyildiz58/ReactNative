import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { s } from 'react-native-wind'

function CustomHeader({ title }) {
    return (
        <View style={[s`flex-row bg-white justify-between items-center px-5 pt-4 pb-6 mb-8 rounded-b-lg`, styles.header, styles.shadow]}>
            <Text style={s`text-3xl font-bold text-gray-800 py-2.5`}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 20,
    },
});

export default CustomHeader;