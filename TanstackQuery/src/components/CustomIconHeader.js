import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { s } from 'react-native-wind';

import IconBtn from './IconBtn';

function CustomIconHeader({ title, func, name, size }) {
    return (
        <View style={[s`flex-row bg-white justify-between items-center px-5 pt-4 pb-6 mb-8 rounded-br-3xl rounded-bl-3xl`, styles.shadow]}>
            <Text style={s`text-3xl font-bold text-gray-800`}>{title}</Text>
            <IconBtn func={func} name={name} size={size} color={s`text-black`.color} />
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 20,
    },
});

export default CustomIconHeader;
