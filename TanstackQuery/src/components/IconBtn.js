import React from 'react';
import { TouchableOpacity } from 'react-native';
import { s } from 'react-native-wind';

import Icon from './Icon';

function IconBtn({ name, size, color, func }) {
    return (
        <TouchableOpacity onPress={func} style={s`p-2 justify-center items-center`}>
            <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
    );
}


export default IconBtn;
