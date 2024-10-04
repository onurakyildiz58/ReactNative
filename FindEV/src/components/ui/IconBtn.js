/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';

function IconBtn({ name, size, color, func, style }) {
    return (
        <TouchableOpacity onPress={func} style={[styles.container, style]}>
            <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default IconBtn;
