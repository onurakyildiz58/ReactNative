import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Icon from './Icon';

import { GlobalStyles } from '../../utils/styles/Color';

function IconBtn({ name, func }) {
    return (
        <TouchableOpacity onPress={func} style={styles.container}>
            <Icon name={name} size={25} color={GlobalStyles.colours.black} />
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