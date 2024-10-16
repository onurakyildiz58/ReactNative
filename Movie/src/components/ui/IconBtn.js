import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { s } from 'react-native-wind';

function IconBtn({ name, size, color, func, style }) {
    return (
        <TouchableOpacity onPress={func} style={[s`p-2 justify-center items-center`, style]}>
            <Icons name={name} size={size} color={color} />
        </TouchableOpacity>
    );
}


export default IconBtn;
