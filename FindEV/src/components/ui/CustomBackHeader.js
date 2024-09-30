/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../utils/style/Color';
import Icon from './Icon';

function CustomBackHeader({ title, func }) {
    return (
        <View style={[styles.header, styles.shadow]}>
            <TouchableOpacity onPress={func}>
                <Icon name={'arrow-back'} size={30} color={GlobalStyles.colours.gray100} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: GlobalStyles.colours.green500,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 18,
        paddingTop: 18,
        paddingBottom: 25,
        marginBottom: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: GlobalStyles.colours.gray100,
    },
    shadow: {
        shadowColor: GlobalStyles.colours.black,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 20,
    },
});

export default CustomBackHeader;
