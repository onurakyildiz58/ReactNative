import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { s } from 'react-native-wind';

function IconBtn({ name, size, color, func, style }) {
    return (
        <TouchableOpacity onPress={func} style={[s`p-2 justify-center items-center`, style]}>
            <Feather name={name} size={size} color={color} />
        </TouchableOpacity>
    );
}


export default IconBtn;