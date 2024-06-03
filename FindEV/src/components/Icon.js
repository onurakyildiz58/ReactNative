/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

function Icon({ name, size, color }) {
    return (
        <View>
            <Icons name={name} size={size} color={color} />
        </View>
    );
}

export default Icon;
