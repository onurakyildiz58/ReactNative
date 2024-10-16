import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

function Icon({ name, size, color }) {
    return <Icons name={name} size={size} color={color} />;
}

export default Icon;
