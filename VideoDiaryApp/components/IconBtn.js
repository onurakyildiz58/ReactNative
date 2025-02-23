import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { s } from 'react-native-wind';

function IconBtn({ name, size, color, func }) {
    return (
        <TouchableOpacity onPress={func} style={s`p-2 justify-center items-center`}>
            <Icons name={name} size={size} color={color} />
        </TouchableOpacity>
    );
}

export default IconBtn;
